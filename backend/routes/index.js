/*module.exports=function(app, User, Bucket, passport)
{
    
    app.get("/", (req, res, next) => {  
        res.sendFile("index.html", { root: publicRoot })
      })
    
    app.post('/api/register', function(req, res, next){
        var user = new User();
        console.log(req.body);
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function(err){
            if(err){
                console.error(err)
                res.json({result:0});
                return;
            }
        });
    });

    app.get("/api/logout", function(req, res) {
        req.logout();
        req.session.save(function(){
            res.redirect('/main')
        });
        console.log("logged out")
    })

    app.get('/main', function(req, res){
        if(req.user && req.user.name){
            res.send("Hello"+req.user.name)
        }
        else{
            app.get('/main', function(req,res){})
        }
    })

    passport.serializeUser((user, done) => {
        console.log(serial)
        done(null, user.email)
    })
    
    passport.deserializeUser((email, done) => {
        User.find({'email': email}, function(err, user){
            console.log(deserial)
            done(null, user);
        })
    })
    
    passport.use(
        new LocalStrategy(
            function(email, password, done){
                console.log(email)
                console.log(password)
                User.findOne({ email: email}, function(err, user) {
                    if (user.password === password) {
                        console.log("There is user");
                        done(null, user)
                    } else {
                        console.log("No user");
                        done(null, false, { message: 'Incorrect username or password' })
                    }
                })
                done("login 실패",false);
            }
        )
    )

    app.get("/api/login", (req, res) => {
        console.log("login실패")
    })

    app.post("/api/login", (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            console.log(user)
            if(err) {
                console.log("Err");
                return next(err);
            }
    
            if(!user) {
                console.log("Error 400");
                return res.status(400).send([user, "Cannot log in", info]);
            }
    
            req.login(user, err => {
                res.send("Logged in");
            });
        })(req, res, next);
    });
        
    const authMiddleware = (req, res, next) => {
        if(!req.isAuthenticated()) {
            res.status(401).send('You are not authenticated')
        } else{
            return next()
        }
    }
    
    app.get("/api/user", authMiddleware, (req, res) => {
        let user = users.find(user => {
            return user.email === req.cookieSession.passport.user
        })
        
        console.log([user, req.cookieSession])
    
        res.send({ user: user })
    })

    
    
    
    
}*/