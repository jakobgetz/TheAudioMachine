let express = require('express');
let server = express();
let body_parser = require('body-parser');

server.use(body_parser.urlencoded({extended: true}));
server.use('/MyWebApp', express.static(__dirname + '/public'));
server.set('view engine', 'ejs');


server.post('/MyWebApp/send', (req, res) => {
	let request = req.body.language;
	
	console.log(request);
	res.send(request + ' Joooooo wahrscheinlich');
});

server.listen(8080);
console.log('server running on port 2017...');