//This will output when the page loads
document.write("0");

//This will output when a button is pressed
function theRest(outputZero){
	document.getElementById("output1").innerHTML=outputZero+1;
	document.getElementById("output2").innerHTML=outputZero+2;
	document.getElementById("output3").innerHTML=outputZero+3;
}
