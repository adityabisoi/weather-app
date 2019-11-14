var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar,IN&appid=4f8c2ea82b661337e6cdb87c43601c8b&units=metric';

var server=http.createServer(function(request,response)
{
    var request=require('request');
    request(url,function(err,res,body)
    {
        var data=JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>"+data['name']+"</h1><br>");
        response.write("<h2>"+"Temperature:"+data.main['temp']+"^C"+"</h2><br>");
        response.write("</div></body></html>");
        response.end();
        
    });
}).listen(8080);