function ID_input_onFocus ()
{
  const id = document.getElementById( "id" );
  // const focus = id.document.hasFocus();

  if ( document.hasFocus() )
  {
    id.value = "";
  }
}

function PW_input_onFocus ()
{
  const pw = document.getElementById( "pw" );

  if ( document.hasFocus() === true )
  {
    pw.value = "";
  } else
  {
    pw.value = "dad";
  }
}

function login_Btn_Click ()
{
  var login = document.getElementById( "login" );
  var id = document.getElementById( "id" );
  var pw = document.getElementById( "pw" );

  if ( login.onclick )
  {
    if ( id.value === "1234" && pw.value === "1234" )
    {
      alert( "Login Success" );
    } else
    {
      alert( "Login Fail" );
      location.href = "/html/Login.html";
    }
  }
}
