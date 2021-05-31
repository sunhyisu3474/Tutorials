var http = require( `http` );
var fs = require( `fs` );
var server = http.createServer( function ( request, response )
{
  var url = request.url;
  if ( url == `/` )
  {
    url = `/html/Index.html`;
  }
  if ( url == `/favicon.ico` )
  {
    return response.writeHead( 404 );
  }
  response.writeHead( 200 );
  response.end( fs.readFileSync( __dirname + url ) );
} );

server.listen( 80 );
