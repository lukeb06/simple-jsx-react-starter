const cookieParser = require("cookie-parser");
const express = require("express");
const JSONdb = require("simple-json-db");
const app = express();

const usersDB = new JSONdb("users.json");

const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.use(cookieParser());

const checkAuth = ({ email, password }) => usersDB.has(email) && usersDB.get(email).password == password;

const getUser = email => usersDB.has(email) ? usersDB.get(email) : null;

app.get("/doSignup", (req, res) => {
    let { email, password, first, last } = req.query;

    if (usersDB.has(decodeURIComponent(email))) {
        res.json({error: "User with this email already exists."})
        return;
    }

    res.json({error:null});

    usersDB.set(decodeURIComponent(email), {
        password: decodeURIComponent(password),
        name: {
            first: decodeURIComponent(first),
            last: decodeURIComponent(last)
        },
        posts:[],
        friends:[]
    });
});

app.get("/doLogin", (req, res) => {
    let { email, password } = req.query;

    if (!usersDB.has(decodeURIComponent(email))) {
        res.json({error: "User with this email does not exist."})
        return;
    }

    if (usersDB.get(decodeURIComponent(email)).password != password) {
        res.json({error: "Incorrect password."});
        return;
    }

    res.json({error:null});
});

app.get("/auth", (req, res) => {
    if (checkAuth(req.cookies)) return res.json({valid:true});
    res.json({valid:false});
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost${PORT != 80 ? ":"+PORT : ""}/`);
});