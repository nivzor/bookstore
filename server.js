const express = require('express');
const path = require('path');

let app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.resolve(__dirname, './')));

app.listen(PORT, function(){
	console.log('Express server is up on port: ' + PORT);
});