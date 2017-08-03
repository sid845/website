var url=require("url");
var http=require("http");
var fs=require("fs");

var PORT=8080;

var server=http.createServer(handleRequest);
server.listen(PORT,function(){
  console.log("server is listening on http://localhost:"+PORT);
});
function handleRequest(req,res){
  var urlParts=url.parse(req.url);
  switch(urlParts.pathname){
    case "/":
      displayRoot(req,res);
      break;
    case "/food":
      displayFood(req,res);
      break;
    case "/movies":
      displayMovies(req,res);
      break;
    case "/css":
      dispalyCss(req,res);
      break;
    default:
      dispaly404(req,res);
      break;
  }
}
function displayRoot(req,res){
  var html="<html>";
      html+="<head><title>home</title>";
      html+="<body>";
      html+="<a href='/food.html'>Favorite food</a>";
      html+="<a href='/movies.html'>Favorite Movies</a>";
      html+="<a href='/css.html'>Favorite css frameworks</a>";
      html+="</body></html>";
  res.writeHead(200,{"content-type":"text/html"});
  res.end(html);
}
function display404(req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
function displayFood(req,res){
  fs.readFile(__dirname + "/food.html",function(err,data){
    if(err) throw err;
    res.writeHead(200,{"content-type":"text/html"});
    res.end(data);
  });
  
}

function displayMovies(req,res){
  fs.readFile(__dirname + "/movies.html",function(err,data){
    if(err) throw err;
    res.writeHead(200,{"content-type":"text/html"});
    res.end(data);
  });
  
}
function displayCss(req,res){
  fs.readFile(__dirname + "/css.html",function(err,data){
    if(err) throw err;
    res.writeHead(200,{"content-type":"text/html"});
    res.end(data);
  });
  
}
