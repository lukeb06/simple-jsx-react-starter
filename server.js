const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");

app.use(express.static(`${__dirname}/dist`));
app.use(cookieParser());

const jsondb = require("simple-json-db");

const db = new jsondb("users.json");

const validateUser = (email, password) => (db.has(email) && db.get(email).password == password);

app.get("/validateUser", (req, res) => {
    const { email, password } = req.cookies;
    res.send(validateUser(email, password));
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost${PORT != 80 ? ":"+PORT : ""}/`);
}); 