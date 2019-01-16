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

var email = ''
//user login 관리
MongoClient.connect(url,{useNewUrlParser: true}, function(err,client){
    if (err)
        console.log('Unable to connect to the mongoDB server.Error', err);
    else{
        db = client.db('timetable')

        app.post("/", (req, res, next) => {  
            res.redirect("/")
            return res.sendFile("index.html", { root: publicRoot })
        })

        app.post('/api/logout', function(req,res){
            console.log('logout실행')
            req.logout();
            return res.send();
        });

        app.post('/api/', function(req, res){
            console.log("main"+req.body)
            if(req.user && req.user.name){
                return res.send("hello " + req.user.name);
            }
            else{}
        });

        passport.serializeUser(function(user, done){
            console.log('serializeuser'. user);
            done(null, user.name);
        });

        passport.deserializeUser(function(name, done){
            console.log('deserializeUser', name);
            db.collection('user').findOne({'name': name}, function(err,user){
                console.log(user)
                email = user.email;
                return done(null, user);
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
                    return res.send('login완료')
                });
            })(req, res, next);
        });

        app.post('/api/register', function(req, res, next){
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
                    db.collection('user').insertOne(insertJson)
                    console.log('register 완료')
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

        app.post("/api/user", authMiddleware, (req, res) => {
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
            db.collection('subject').find( {'grade':{$in:req.body.grade}, 'crucial' :{$in:req.body.crucial}, 'subject':{$in:req.body.subject}}).toArray(
                function(err, subject){
                    console.log(req.body.grade)
                    console.log(req.body.crucial)
                    console.log(req.body.subject)
                    console.log(subject[0])
                    res.send(subject)
            })
        });

        app.post('/api/insert_bucket', function(req,res){
            db.collection('subject').find({ NO : req.body.item}).count(function(err,number){
                console.log(req.body.item)
                console.log(number)
                if(number != 0){
                    db.collection('subject').findOne({NO : req.body.item}, function(err, subject){
                        console.log(subject)
                        let data = { NO : req.body.item, subject: subject.subject, grade : subject.grade, class : subject.class,
                        title : subject.title, professor : subject.professor , method : subject.method,
                        time : get_time(subject), user : email }
                        if( req.body.must ){
                            db.collection('bucket_must').find({ NO: data.NO , user : email}).count(function(err, num){
                                if( num == 0){
                                    db.collection('bucket_must').insertOne(data);}
                                else {
                                    res.send('이미 교과목이 포함되어 있습니다.');
                                }}
                            )}
                        else {
                            db.collection('bucket_option').find({ NO: data.NO , user : email}).count(function(err, num){
                                if( num == 0){
                                    db.collection('bucket_option').insertOne(data);}
                                else {
                                    res.send('이미 교과목이 포함되어 있습니다.');
                                    }
                                }
                            )}
                    })
                }
            })
        });

        app.post('/api/load_bucket', function(req, res){
            console.log('getbucket')
            console.log(req)
            console.log(req.body)
            setTimeout(function(){
                if(req.body.must){
                db.collection('bucket_must').find({user : email}).toArray(function(err, subject){
                    console.log("must bucket")
                    console.log(subject)
                    res.send(subject)
                })
                }
            else{
                db.collection('bucket_option').find({user : email}).toArray(function(err, subject){
                    console.log("option bucket")
                    console.log(subject)
                    res.send(subject)
                })
            }}, 200)
        });

        app.post('/api/insert_table', function(req, res){
            db.collection('timetable').insertOne(req.body);
        });

        app.post('/api/delete_table', function(req, res){
            console.log("delete")
            console.log(req.body)
                db.collection('bucket_must').deleteOne({'NO':req.body.id, 'user':email});
            });
            
   

        app.get('/api/insert_table', function(req, res){
            db.collection('timetable').find({'user': email}, function(err, timetable){
                return res.send(timetable);
            })
        });
    }
})

get_time = function(subject){
    sub = subject.time.split(', ')
    times = []
    var i = 0
    while (i < sub.length) {
        let day = sub[i][0]
        let start = sub[i].substr(1, 5)
        let starttime = start.split(':')[0]
        let startminute = start.split(':')[1]
        let end = sub[i].substr(7,5)
        let endtime = end.split(':')[0]
        let endminute = end.split(':')[1]
        console.log(endtime)
        console.log(endminute)
        let interval = ((endtime-starttime) + ((endminute - startminute)/60))*2
        let data = { 'day' : day, 'starttime' : start , 'interval' : interval} 
        times.push(data)
        i++
    }
    console.log(times)
    return times
}
