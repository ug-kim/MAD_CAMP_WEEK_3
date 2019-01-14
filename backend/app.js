const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
//const mongoose = require('mongoose')
var mongodb = require('mongodb');
const LocalStrategy = require('passport-local').Strategy
//const db = mongoose.connection;

//db.on('error', console.error);

//db.once('open', function(){
//    console.log("connectec to mongod server");
//});

app.listen(80, () => {
    console.log("Example app listening on port 80")
})

const publicRoot = "../frontend/dist"
app.use(express.static(publicRoot))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession({
    name : 'mysession', 
    keys: ['vueauthrandomkey'],
    maxAge : 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user');
var Bucket = require('./models/bucket');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017'

//user login 관리
MongoClient.connect(url,{useNewUrlParser: true}, function(err,client){
    if (err)
        console.log('Unable to connect to the mongoDB server.Error', err);
    else{
        db = client.db('timetable')

        app.get("/", (req, res, next) => {  
            res.redirect("/")
            return res.sendFile("index.html", { root: publicRoot })
        })

        app.get('/api/logout', function(req,res){
            console.log('logout실행')
            req.logout();
            return res.send();
        });

        app.get('/api/', function(req,res){
            console.log("main"+req.body)
            if(req.user && req.user.name){
                return res.send("hello " + req.user.name);
            }
            else{
                app.get('/api/login', function(req,res){})
            }
        });

        passport.serializeUser(function(user, done){
            console.log('serializeuser'. user);
            done(null, user.name);
        });

        passport.deserializeUser(function(name, done){
            console.log('deserializeUser', name);
            db.collection('user').findOne({'name': name}, function(err,user){
                console.log(user)
                return done(null,user);
            });
        })

        passport.use(new LocalStrategy(        
            {
            usernameField: "email",
            passwordField: "password"
        }, 
            function(email, password, done){
                db.collection('user').find({'email':email}).count(function(err,number){
                    if(number == 0){
                        return done('등록된 사용자가 아닙니다.', false);
                        console.log('등록된 사용자가 아닙니다.');
                    }
                    else{
                        db.collection('user').findOne({'email':email}, function(err, user){
                            console.log(email)
                            console.log(password)
                            console.log(user)
                            if(password == user.password){
                                done(null, user)
                            }
                            else{
                                console.log("local2")
                                console.log(user.password, user.email)
                                done(null, false, {message: '잘못된 email 또는 password입니다'})
                            }
                        })
                    }
                    })
                }))

        app.post("/api/login", (req, res, next) => {
            passport.authenticate("local", (err, user, info) => {
                if(err) {
                    console.log("Err");
                    return next(err);
                }
                if(!user) {
                    console.log("Error 400");
                    return res.status(400).send([user, "Cannot log in", info]);
                }
                req.login(user, err => {
                    console.log("loginok")
                    return res.redirect('/')
                });
            })(req, res, next);
        });

        app.post('/api/register', function(req, res){
            var insertJson = {
                'email' : req.body.email,
                'name' : req.body.name,
                'password' :req.body.password
            }
            console.log(req.body)
            db.collection('user').find({'email':req.body.email}).count(function(err, number){
                if(number != 0){
                    res.send('이미 가입된 email입니다.')
                    console.log('이미 가입된 email입니다.')
                }
                else{
                    db.collection('user').insertOne(insertJson, function(err,res){
                    })
                    return res.send()
                }
            })
        });

        const authMiddleware = (req, res, next) => {
            if(!req.isAuthenticated()) {
                console.log(req.session)
                console.log("authenticate")
                return res.status(401).send('You are not authenticated')
            } else{
                return next()
            }
        }

        app.get("/api/user", authMiddleware, (req, res) => {
            db.collection('user').find({'name':req.session.passport.user}).count(function(err,number){
                if(number == 0){
                    console.log(req.session.passport.user)   
                    console.log("api/user 0")     
                }
                else{
                    console.log("api/user")
                    console.log(req.session.passport.user)
                    db.collection('user').findOne({'name':req.session.passport.user}, 
                    function(err,user){
                        console.log([user, req.session])
                        return res.send({ user: user })
                    })
                }
        })});

    }
})

/// subject 관리

MongoClient.connect(url,{useNewUrlParser: true}, function(err,client){
    if (err)
        console.log('Unable to connect to the mongoDB server.Error', err);
    else{
        db = client.db('timetable')

        app.post('/api/search', function(req, res){
            db.collection('subject').find(
                {'과목번호':{$in:[req.body.grade]}, '이수구분' :{$in:[req.body.crucial]}, '교과영역':{$in:[req.body.subject]}},
                function(err, subject){
                    return res.send(subject)
            })
        });

        app.post('/api/insert_bucket', function(req,res){
            db.collection('bucket').insertOne(req.body);
            return res.send('insertok')
        });

        app.get('api/insert_bucket', function(req, res){
            db.collection('bucket').find({'user' : req.body.user}, function(err,subject){
                return res.send(subject)
            })
        });

        app.post('api/insert_table', function(req, res){
            db.collection('timetable').insertOne(req.body);
        });

        app.get('api/insert_table', function(req, res){
            db.collection('timetable').find({'user': req.body.user}, function(err, timetable){
                return res.send(timetable);
            })
        });



    }
})
