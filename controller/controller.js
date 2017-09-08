var express = require('express');
var multer = require('multer');
//var bodyParser = require('body-parser');

var storage = multer.diskStorage({
		  destination: function (req, file, cb) {
		    cb(null, './public/img');
		  },
		  filename: function (req, file, cb){
		    cb(null, file.originalname);
		  }
		});

var upload = multer({storage: storage});

//var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){

	app.get('/', function(req, res){
		var path = "";
		res.render('index', {path: path});
	});

	app.post('/upload', upload.single('file'), function(req, res){
		var path = req.file.originalname;
		var path = "img/"+path;
		res.render('index', {path: path});
	});

	/*app.get('/:theImageName', function(req, res){
	   console.log(req.params.theImageName); //returns the imageOfApet.png
	   var theName = req.params.theImageName; //imageOfApet.png
	   res.sendFile('/Applications/MAMP/htdocs/fileMetaData-Node/public/img/' + theName); //Sending the user the file
	});*/
}