const express = require('express');

let app = express();
const PORT = process.env.PORT || 9000;
app.use(express.static('public'));
app.listen(PORT, function(){
	console.log('Express server is up on port: ' + PORT);
});