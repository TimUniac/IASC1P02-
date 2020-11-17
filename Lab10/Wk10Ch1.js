//button function add
function sumUp(){
//collects input from text fields
    var numberOne = input1.value;
    var numberTwo = input2.value;
//coverts or casts the inputs from strings to numbers
    var thisOne = Number(numberOne);
    var thisTwo = Number(numberTwo);
//adds the two numbers together
    var answer = thisOne+thisTwo;
 //prints the answer at the top of the page
    document.getElementById("output").innerHTML=answer;
    }

//button function subtract
    function cutUp(){
//collects input from text fields
    var numberOne = input1.value;
    var numberTwo = input2.value;
//coverts or casts the inputs from strings to numbers
    var thisOne = Number(numberOne);
    var thisTwo = Number(numberTwo);
//adds the two numbers together
    var answer = thisOne-thisTwo;
//prints the answer at the top of the page
            document.getElementById("output").innerHTML=answer;
        }


//button function mult
  function multUp(){
  //collects input from text fields
    var numberOne = input1.value;
    var numberTwo = input2.value;
 //coverts or casts the inputs from strings to numbers
    var thisOne = Number(numberOne);
    var thisTwo = Number(numberTwo);
  //mulitplys the two numbers together
    var answer = thisOne*thisTwo;
//prints the answer at the top of the page
    document.getElementById("output").innerHTML=answer;
    }



//button function divide
  function divUp(){
//collects input from text fields
    var numberOne = input1.value;
    var numberTwo = input2.value;
//coverts or casts the inputs from strings to numbers
    var thisOne = Number(numberOne);
    var thisTwo = Number(numberTwo);
//divides the two numbers
    var answer = thisOne/thisTwo;
 //prints the answer at the top of the page
    document.getElementById("output").innerHTML=answer;
    }
