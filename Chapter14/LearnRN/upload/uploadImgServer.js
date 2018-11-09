var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
function route(handle, pathname, response, request) {
	if (typeof handle[pathname] === 'function') { 
		handle[pathname](response, request); 
	}
	else { 
		console.log("No request handler found for " + pathname); 
		response.writeHead(404, {"Content-Type": "text/html"}); 
		response.write("404 Not found"); 
		response.end(); 
	} 
} 
function upload(response, request) {   
	var form = new formidable.IncomingForm(); 
	form.parse(request, function(error, fields, files) {
			if ( error === null ) console.log( 'Uploading incoming!' );
			fs.renameSync(files.photo.path, "./upload/test.png"); 
			response.writeHead(200, {"Content-Type": "text/html"}); 
			response.write("received image:<br/>"); 
			response.write("<img src='/show' />"); 
			response.end(); 
		}
	); 
} 
function startServer(route, handle) { 
	function onRequest(request, response) { 
		var pathname = url.parse(request.url).pathname;
		route(handle, pathname, response, request); 
	} 
	http.createServer(onRequest).listen(8888);
	console.log("Server has started."); 
} 
var handle = {}
handle["/upload"] = upload; 
startServer(route, handle);
