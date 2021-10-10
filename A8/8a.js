const express = require("express");
const body_parser = require("body-parser");

const app = express();

const port = 25566;

app.engine('pug', require('pug').__express)
app.set("view engine", "pug");

app.use(
    express.urlencoded({
       extended: true,
    })
);

app.use(body_parser.json());

app.get("/form", (req, res) => {
   res.render("formview");
});

app.get("/hello", (req, res) => {
   res.send("henlo world");
});

app.post("/formdata", (req, res) => {
    res.render("results", req.body);
});

app.post("/jsondata", (req, res) => {
    res.render('results', req.body);
});



app.listen(port, ()=> {
   console.log(`listening on port ${port}`);
});
