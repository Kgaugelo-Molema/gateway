function ValidateLogin() {
var LoginName = parent.contentframe.LoginForm.login.value 
var Pwd = parent.contentframe.LoginForm.password.value
var isValid = true
  if (LoginName.length == 0) {
    alert("Please type in your username")
    isValid = false
    parent.contentframe.LoginForm.login.focus()
  } 
  else if (Pwd.length == 0) {
    alert("Invalid password entered")
    isValid = false
    parent.contentframe.LoginForm.password.focus()
  } 
  if (isValid) {
    if (LoginName.toUpperCase() == "MOMO") {
      //parent.contentframe.location = "../pages/fotopage.htm"
      //window.location("../pages/home.htm","","status,scrollbars,resizable")
      window.location.assign("../index.htm")
    }
    else {
      alert(LoginName + " " + "not found")
    }
  }
}

function Proceed() {
  window.location.assign("../index.htm")
}

function assignURL(sURL) {
  alert(sURL)
  //window.location.assign(sURL)
  }
  
function shwHideCtrls() {
  parent.contentframe.visibility = false
  }  
