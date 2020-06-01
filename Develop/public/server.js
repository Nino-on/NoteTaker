var express = require("express");
var fs = require("fs");
var path = require("path");
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
//notes.html
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});
//index.html
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});