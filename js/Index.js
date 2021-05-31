function Login_Btn_Click ()
{
	const loginBtn = document.getElementById( "loginBtn" );

	if ( loginBtn.onclick )
	{
		location.href = "/html/Login.html";
	}
}

function Register_Btn_Click ()
{
	const registerBtn = document.getElementById( "registerBtn" );

	if ( registerBtn.onclick )
	{
		location.href = "/html/Register.html";
	}
}
