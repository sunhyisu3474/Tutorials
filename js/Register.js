/*
// 계정 정보를 삽입하는 부분
function join_account ()
{
  const input_ID = document.getElementById( "input_ID" );
  const input_PW = document.getElementById( "input_PW" );
  const button_submit = document.getElementById( "Button_Submit" );
  var insert_account = `INSERT INTO accounts VALUES("input_ID.value", "input_PW.value" )`;

  db.query( insert_account, function ( error, insert_account )  //  callback function
  {
    if ( error )
    {
      if ( `ER_DUP_ENTRY` )  //  같은 ID값을 등록하려 할 때 에러 코드
      {
        console.log( `문자열이 같은 ID값이 이미 존재합니다.` );
        close();
      }
      console.log( `계정 정보를 등록하는데 오류가 발생하였습니다.` );
      alert( "알 수 없는 이유로 회원가입에 실패하였습니다." );
      throw error;
    }
    else if ( button_submit.onsubmit )
    {
      alert( "회원가입을 축하드립니다." );
      console.log( `계정 정보를 성공적으로 등록하였습니다.`, insert_account );
    }
  } );
}

// 삽입된 정보를 확인하고 테이블 내용을 출력하는 부분
var select_accounts = `SELECT * FROM accounts`;
db.query( select_accounts, function ( error, select_accounts )
{
  if ( error )
  {
    console.log( `테이블 내용정보를 로딩하는데 에러가 발생하였습니다.` );
    throw error;
  }
  else if ( select_accounts )
  {
    console.log( `계정 정보를 성공적으로 로딩하였습니다.`, select_accounts );
  }
} )

db.end( function ( error )  //  연결 종료 추가적인 방법 => .destroy();
{
  if ( error )
  {
    console.log( `연결을 종료하는 과정에서 에러가 발생하였습니다.` )
  } console.log( `연결을 종료하였습니다.` );
} );*/

/* var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  database: 'tutorials',
  user: 'root',
  password: '#Sunhyisu344774',
  port: '3474'
});
db.connect(); */

//  create account
function joinAccount() {
  var btnSubmit = document.getElementById('btnSubmit');
  var input_ID = document.getElementById('input_ID').value;
  var input_PW = document.getElementById('input_PW').value;
  if (btnSubmit.submit()) {
    var insert_account = 'INSERT INTO accounts VALUES("input_ID", "input_PW")';

    db.query(insert_account, function (error, insert_account) {
      if (error) {
        console.log(error);
      }
      else if (insert_account) {
        console.log(loading_accounts);
      }
      response.writeHead(200);
      response.end(`Loading Success`);
    });
  }
  db.end();
}
