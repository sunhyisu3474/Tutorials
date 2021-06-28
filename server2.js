var http = require( `http` );
var fs = require( `fs` );
var mysql = require( `mysql` );
var db = mysql.createConnection( {
  host: `localhost`,
  database: `tutorials`,
  user: `root`,
  password: `#Sunhyisu344774`,
  port: `3474`
} );
db.connect();

var server = http.createServer( function ( request, response )
{
  var url = request.url;
  if ( url == '/' )
  {
    url = '/html/Index.html';
  }

  if ( url == '/html/Register.html' )
  {
    url = '/html/Register.html';
    //  loading_account
    var lodaing_accounts = `SELECT * FROM accounts`;
    db.query( lodaing_accounts, function ( error, lodaing_accounts )
    {
      if ( error )
      {
        console.log( '에러가 발생하였습니다.' );
        console.log( error );
      }
      else if ( lodaing_accounts )
      {
        console.log( '정보를 성공적으로 로딩하였습니다.', lodaing_accounts );
      }
      response.writeHead( 200 );
      response.end( 'Loading Success' );
    } );
  }

  if ( url == `/favicon.ico` )
  {
    return response.writeHead( 404 );
  }
  response.writeHead( 200 );
  response.end( fs.readFileSync( __dirname + url ) );
} );

server.listen( 80 );
