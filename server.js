var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages = {
	'page-One':{
			title:'About ! sreerag',
			heading:'myself',
			date :'123aug 2093',
			content:'<p>java developer freelancer css ajax</p>',
	 },

	'page-Two':{
			title:'About ! sreerag',
			heading:'myself',
			date :'123aug 2093',
			content:'<p>java developer freelancer css ajax</p>',
	},
	'about':{
			title:'hallooooooooooooo',
			heading:'myself',
			date :'123aug 2093',
			content:'<p>m ymail id is </p>',
	}	
};

function createTmp(data){
	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;
	var htmlTmp=`
	<html>
		<title>
			${title}
		</title>
	<body>
		${date}
			asda ${content}
			</body>
	</html>`;
	return htmlTmp; 
}

/*  query based working submit-name?name=sree         */
var names = [];
app.get('/submit-name', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  var name = req.query.name;
  names.push(name);
  
  res.send(JSON.stringify(names));
  
});




var counter = 0;
app.get('/counter', function (req, res) {
counter = counter +1;
res.send(counter.toString());
});


app.get('/:pageName', function (req, res) {
   var pageNameIs  = req.params.pageName;
  // alert(pageNameIs);
   res.send(createTmp(pages[pageNameIs]));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/css.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'css.css'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/jquery.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.min.js'));
});


app.get('/ui/slow-up-div.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slow-up-div.js'));
});

app.get('/ui/stage-bg--1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stage-bg--1.jpg'));
});


app.get('/ui/work.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work.jpg'));
});





/*
var names = [];
app.get('/submit-name/:name', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  var name = req.params.name;
  names.push(name);
  
  res.send(JSON.stringify(names));
  
});

url /sree/sr mapping

*/




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
