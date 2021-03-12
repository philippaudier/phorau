const express = require('express');
const forceSsl = require('force-ssl-heroku');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(forceSsl);
app.use(express.static(__dirname + '/dist/phorau'));

// PathLocationStrategy
app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/phorau/index.html'));

})

app.listen(PORT);
console.log('Console listening!' + PORT);