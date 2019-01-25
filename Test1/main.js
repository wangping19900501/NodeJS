var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if (_url == '/'){
        title = 'welcome';
    }else
        title = 'other';
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
        var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${data}</p>
      </body>
      </html>
      `;
        response.end(template);
    });
}).listen(3000);

console.log('test');
