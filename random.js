var name="brandonallred";

// Declare your variable here
var myGlobal = 10;


function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);

  --------------------------------------------------------------------------

  var processed = (0);

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

--------------------------------------------------------------------------------------
if (number==2)
  {
    return 2;
  }
else if (nubmer==5)
  {
    return 5;
  }
else if (number==4)
  {
    return 8;
  }

  --------------------------------------------------------------------------------


function testSize(num) {
  // Only change code below this line
  if (num < 5 ) {
    return "Tiny";
  }
  else if (num < 10 ) {
    return "Small";
  }

  else if (num < 15 ) {
    return "Medium";
  }
  else if (num < 20 ) {
    return "Large";
  }
  else if (num >= 25) {

  }
  return "Huge";
}
testSize(7);
