//loads with page
var start= new Date();
var startMilli = start.getTime();

//loads on button push
function stopTime(){
    var stop = new Date()
    var stopMilli = stop.getTime();
    var diffMilli = stopMilli-startMilli;
    var diffSecs = diffMilli/1000;
    alert ("You have been on this page for "+diffSecs+" seconds");
}
