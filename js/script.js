// JavaScript Document
var rollimgs = new Array(6)

for(j = 0; j < 7; j++)
	{
	//swapimgs[j] = new Image()
	rollimgs[j] = new Image()
	}
	
rollimgs[0].src = "../images/left-arrow-icon.jpg"
rollimgs[1].src = "../images/uni-info-logo.jpg"
rollimgs[2].src = "../images/uni-info-logo.jpg"
rollimgs[3].src = "../images/uni-info-logo.jpg"
rollimgs[4].src = "../images/uni-info-logo.jpg"
rollimgs[5].src = "../images/uni-info-logo.jpg"

function activeLink(imgnum)
	{
	document.images[imgnum].src = rollimgs[imgnum].src
	}

function inactiveLink(imgnum)
	{
	document.images[imgnum].src = rollimgs[0].src
	}
	
function validString(str) 
	{
	if (str.length == 0)
	  {
	  return false
	  }
	else
	  {
	  return true
	  }
	}
	
function checkorderform(form) 		
	{
	if (validString(form.yourname.value) == false)
	  {
	  alert("Invalid name entered")
	  form.yourname.focus()
	  return false
	  } 
    else if (validString(form.email.value) == false)
      {
	  alert("Invalid email address entered")
	  form.email.focus()
	  return false
      }
	}
	
