const express = require("express");
const app = express();
const path = require('path');


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'views')));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 5000);