const express = require('express')

const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy


const publicRoot = "../frontend/dist"
app.use(express.static(publicRoot))


app.use(bodyParser.json())

app.use(cookieSession({
    name : 'mysession', 
    keys: ['vueauthrandomkey'],
    maxAge : 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

let users = [
    {
        id: 1, 
        name: "Jude",
        email: "user@email.com",
        password: "password"
    },
    {
        id: 2,
        name: 'Emma',
        email: 'emma@email.com',
        password: "password2"
    }
]

app.get("/", (req, res, next) => {  
    res.sendFile("index.html", { root: publicRoot })
})

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
            res.send("Logged in");
            console.log("OKKKKKKK");
        });
    })(req, res, next);
});

app.get("/api/logout", function(req, res) {
    req.logout();
    console.log("logged out")
    return res.send();
})

const authMiddleware = (req, res, next) => {
    if(!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated')
    } else{
        return next()
    }
}

app.get("/api/user", authMiddleware, (req, res) => {
    let user = users.find(user => {
        return user.id === req.session.passport.user
    })

    console.log([user, req.session])

    res.send({ user: user })
})


passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        }, 

        (email, password, done) => {
            let user = users.find((user) => {
                console.log(email)
                console.log(password)
                if(user.email === email && user.password === password){
                    return user
                }
            })
            if (user) {
                console.log("There is user");
                done(null, user)
            } else {
                console.log("No user");
                done(null, false, { message: 'Incorrect username or password' })
            }
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    let user = users.find((user) => {
        return user.id === id
    })
    done(null, user)
})

app.listen(80, () => {
    console.log("Example app listening on port 80")
})