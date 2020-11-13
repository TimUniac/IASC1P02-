//button function
function sumUp(){
//collects input from text fields
    var numberOne = input1.value;
    var numberTwo = input2.value;
    console.log(numberOne);
//coverts or casts the inputs from strings to numbers
    var thisOne = Number(numberOne);
    var thisTwo = Number(numberTwo);
//adds the two numbers together
    var answer = thisOne+thisTwo;
//prints the answer at the top of the page    
    document.getElementById("output").innerHTML=answer;
}
