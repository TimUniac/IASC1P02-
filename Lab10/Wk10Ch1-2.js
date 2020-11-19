//button function add
function sumUp(type){
//updated for consistency
    var numberOne = parseInt(document.getElementById("input1").value);
    var numberTwo = parseInt(document.getElementById("input2").value);

//checks for passed value. If value matches, executes next line.  If not goes to next else if statement.
if(type=="addi"){
  //executes equation and prints to page
  document.getElementById("output").innerHTML = numberOne + numberTwo;
    }

else if(type=="subt"){
  document.getElementById("output").innerHTML = numberOne - numberTwo;
    }

else if(type=="divi"){
    document.getElementById("output").innerHTML = numberOne / numberTwo;
    }

else if(type=="mult"){
  document.getElementById("output").innerHTML = numberOne * numberTwo;
}
}
