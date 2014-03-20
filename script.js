var agreeLink1_valid = false;
var agreeLink2_valid = false;
var agree_valid = "";

function validate()
{
	//sets agree valid to true when agree radio button is checked.
	if (document.getElementById("agree").checked)
	{
		agree_valid = "agree";
		
	}
	//sets agree valid to false when notagree radio button is checked.
	else if (document.getElementById("notagree").checked)
	{
		agree_valid = "disagree";
	}
	
	// sets agreement text to "" and alerts user that they have agreed to the terms and conditions. Removes inline text.
	if (agreeLink1_valid == true && agreeLink2_valid == true && agree_valid == "agree")
	{
		document.getElementById("agreement").innerHTML = "";
		document.getElementById("agreement").className = "black";
		alert("You have AGREED to the terms and conditions.");
	}
	else if (agreeLink1_valid == true && agreeLink2_valid == true && agree_valid == "disagree")
	{
		document.getElementById("agreement").innerHTML = "";
		document.getElementById("agreement").className = "black";
		alert("You have DISAGREED to the terms and conditions.");
	}
	
	// Requires both document 1 and 2 to be read to continue. Displays inline text.
	else if (agreeLink1_valid == false || agreeLink2_valid == false)
	{
		document.getElementById("agreement").innerHTML = "Please Read both Document 1 and document 2.";
		document.getElementById("agreement").className = "red";
	}
	
	// requires user to select a radio button to continue. Displays inline text.
	else if (agreeLink1_valid == true && agreeLink2_valid == true && agree_valid == "")
	{
		document.getElementById("agreement").innerHTML = "Please Agree to the terms and conditions to continue.";
		document.getElementById("agreement").className = "red";
	}
	
}

function scroll()
{
var objDiv = document.getElementById("agreeScroll");
	
	// Must scroll to bottom of object to enable agree and notagree radio buttons.
	if ( objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight) )
	{
		document.getElementById("agree").disabled = false;
		document.getElementById("notagree").disabled = false;
	}
}

// click on document 1 to set agreeLink1_valid to true.
function click1()
{
	agreeLink1_valid = true;
}

// click on document 2 to set agreeLink2_valid to true.
function click2()
{
	agreeLink2_valid = true;
}

// Displays inline text when agree radio button is checked.
function clickAgree()
{
	document.getElementById("agreement").innerHTML = "You are choosing to accept the terms and conditions.";
	document.getElementById("agreement").className = "black";
}

// displays inline text when notagree radio button is checked
function clickDisagree()
{
	document.getElementById("agreement").innerHTML = "You are choosing to not agree to the terms and conditions.";
	document.getElementById("agreement").className = "red";
}