const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(3000)