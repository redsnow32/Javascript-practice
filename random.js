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

---------------------------------------------------------------------------------------


function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes ==1) {
    return "Hole-in-one!";
  }
  else if (strokes <= par - 2) {
    return "Eagle";

    }
  else if (strokes <= par - 1) {
    return "Birdie";

    }
  else if (par == strokes) {

  return "Par";
  }

  else if (strokes == par + 1)
  {
    return "Bogey";
  }

  else if (strokes == par + 2) {

  return "Double Bogey";
  }
  else if (strokes >= par +3) {
    return "Go Home!";
  }
}
golfScore(4, 9);

----------------------------------------------------------------------------------------------------------------------
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta";
      break;

    case 3:
      answer = "gamma";
      break;

    case 4:
      answer = "delta";
      break;
  }
   
}

caseInSwitch(1);
