//*button function directing to yes page*//
//* Data, Refsnes. “How TO - Full Width (Block) Buttons.” How To Create Full Width Buttons, 2020, www.w3schools.com/howto/howto_css_block_buttons.asp. *//
function yesPage(){
  window.location.href = "finalYes.html";
}
//*button function directing to no page*//
function noPage(){
  window.location.href = "finalNo.html";
}

//* button function directingf to home page*//
function homePage(){
  window.location.href = "final.html";
}

//* before times calculator*//
//*loads after page*//
window.onload=function(){//*Mj1992Mj1992                    2, et al. “Cannot Set Property InnerHTML of Null.” Stack Overflow, 1 Aug. 1961, stackoverflow.com/questions/11163060/cannot-set-property-innerhtml-of-null. *//
var todayDate= new Date();
var startDate= new Date('03/13/2020');
var milliDiff= todayDate.getTime() - startDate.getTime();
console.log(milliDiff);
var answer= milliDiff/(86400000);
console.log(answer);
var diffDays= parseInt(answer);
console.log(diffDays);
document.getElementById('beforeTime').innerHTML=diffDays;
}

//*yes page loop*//
//*walk*//
function nextNo(){
document.getElementById('things').innerHTML="<h3>Go for a walk, or just go to your backyard, or onto your balcony.  Find a way to leave your space and breathe fresh air!</h3> ";
}
function nextOne(){
document.getElementById('idea').innerHTML="Have you called a friend recently?";
document.getElementById('buttOne').setAttribute('onclick','secondOne()');//*shiroshiro                    76111 gold badge99 silver badges1919 bronze badges, et al. “Change OnClick Attribute with Javascript.” Stack Overflow, 1 Apr. 1962, stackoverflow.com/questions/15097315/change-onclick-attribute-with-javascript.  *//
document.getElementById('buttTwo').setAttribute('onclick','secondNo()');
}
//*talk*//
function secondNo(){
document.getElementById('things').innerHTML="<h3>Call a friend, or a parent or sibling.  You may feel like there's no one to talk to, or that you're invading their time, but they want to hear from you.  Just call!</h3> ";
}
function secondOne(){
document.getElementById('idea').innerHTML="You should learn a new skill!  Do you know HTML? It's super easy!.";
document.getElementById('buttOne').setAttribute('onclick','thirdOne()');
document.getElementById('buttTwo').setAttribute('onclick','thirdNo()');
}
//*skill*//
function thirdNo(){
document.getElementById('things').innerHTML="<h3>No you don't want to, or no you don't know HTML? This wasn't well thought out...</h3> ";
}
function thirdOne(){
document.getElementById('idea').innerHTML="How about practicing your french with something like Duolingo?";
document.getElementById('buttOne').setAttribute('onclick','fourthOne()');
document.getElementById('buttTwo').setAttribute('onclick','fourthNo()');
}
//*Language*//
function fourthOne(){
document.getElementById('things').innerHTML="<h3>Great! <a href='https://www.duolingo.com/course/fr/en/Learn-French'> Click Here To Get Started!</a></h3> ";
}
function fourthNo(){
document.getElementById('idea').innerHTML="Have you fed your sourdough starter recently?";
document.getElementById('buttOne').setAttribute('onclick','fifthOne()');
document.getElementById('buttTwo').setAttribute('onclick','fifthNo()');
}
//*Sourdough*//
function fifthNo(){
document.getElementById('things').innerHTML="<h3>It's been a long time hasn't it!?!  The black stuff is fine, just stir it in and feed it for a few days.  Isn't having an edible pet fun?</h3> ";
}
function fifthOne(){
document.getElementById('idea').innerHTML="Are you sure you don't want to go outside?";
document.getElementById('buttOne').setAttribute('onclick','nextOne()');
document.getElementById('buttTwo').setAttribute('onclick','nextNo()');
}
