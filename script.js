const name="Mishti";
const passCode="Saikat";
let nameByUser;
let passCodeByUser;
nameByUser=prompt("Enter Your Name ");
passCodeByUser=prompt("Enter The Passcode ");
if(nameByUser == name && passCodeByUser == passCode){
	alert("You have successfully entered the name and passcode, click OK to continue.")
}
else{
	window.location='/Html/wrong.htm';
}