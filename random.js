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
  return answer;
}

caseInSwitch(1);

---------------------------------------------------------------------------------------------------------------------


function switchOfStuff(val) {
  var answer = "";

  switch (val) {

    case "a":
    return "apple";
      break;

    case "b":
      return "bird";
      break;

    case "c":
      return "cat";
      break;


    default:
      return "stuff";
              }

  return answer;
}

switchOfStuff(1);

---------------------------------------------------------------------------------------------------------------------

function sequentialSizes(val) {
  var answer = "";

  switch (val){
    case 1:
    case 2:
    case 3:
        return "Low";
      case 4:
      case 5:
      case 6:
        return "Mid";
      case 7:
      case 8:
      case 9:
        return "High";
  }

  return answer;
}

sequentialSizes(1);

---------------------------------------------------------------------------------------------------------------------

function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case ("bob"):
    answer = "Marley";
    break;

    case  42:
    answer = "The Answer";
      break;
    case  1:
    answer = "There is no #1";
      break;
    case 99:
    answer = "Missed me by this much!";
      break;
    case 7:
    answer = "Ate Nine";
  }

  return answer;
}

chainToSwitch(7);

---------------------------------------------------------------------------------------------------------------------
function abTest(a, b) {

  // Only change code below this line
  if ( a < 0 || b < 0){
  return undefined;

} else {

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
}
// Change values below to test your code
abTest(-2,2);

---------------------------------------------------------------------------------------------------------------------
function cc(card) {
   switch (card){
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
       count ++;
       break;

     case 10:
     case "J":
     case "Q":
      case"K":
     case "A":
       count --;
       break;
   }
  if(count>0){
    return count+" Bet";
  }
  else {
    return count+" Hold";
  }

  ---------------------------------------------------------------------------------------------------------------------

  var count = 0;

function cc(card) {
  var HighCards = [2, 3, 4, 5, 6];
  var ZeroCards = [7, 8, 9];
  var MinusCards = [10,'J','Q','K','A'];

  count += (HighCards.indexOf(card) != -1) ? 1 : (ZeroCards.indexOf(card) != -1 ) ? 0 : -1;

  return count + ((count > 0) ? ' Bet':' Hold');
}

--------------------------------------------------------------------------------------------------------------------
var count = 0;

function cc(card) {
  // Only change code below this line

  if(card >= 2 && card <= 6){
    count++;
     if(count<=0){ return (count+" Hold"); } else{ return (count+" Bet"); } } else if(card >= 7 && card <= 9) {

     if(count<=0){
    return (count+" Hold");
     }

    else{
      return (count+" Bet");
    }
  }

   else if(card===10 || card==="J" ||  card==="Q" || card==="K" || card==="A"){
    count--;
    if(count<=0){

    return (count+" Hold");
     }

    else{
      return (count+" Bet");
    }
  }
}

--------------------------------------------------------------------------------------------------------------------

var myDog = {
  "name": "CJ",
  "legs": 4,
  "tails": 1,
  "friends":["Mom", "Dad", "Acey", "Evy"]
};



--------------------------------------------------------------------------------------------------------------------
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


--------------------------------------------------------------------------------------------------------------------

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};


var entreeValue = testObj ["an entree"];
var drinkValue = testObj ["the drink"];

--------------------------------------------------------------------------------------------------------------------

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";

--------------------------------------------------------------------------------------------------------------------

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
 myDog.bark = "woof";

 --------------------------------------------------------------------------------------------------------------------

 var myDog = {
   "name": "Happy Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["Free Code Camp Campers"],
   "bark": "woof"
 };

 delete myDog.tails;

 --------------------------------------------------------------------------------------------------------------------


 function phoneticLookup(val) {
   var result = "";

   var lookup = {
      "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
     "delta":"Denver",
     "echo":"Easy",
     "foxtrot":"Frank",

   };
   result = lookup [val];

   return result;
 }

 phoneticLookup("foxtrotgi");
 --------------------------------------------------------------------------------------------------------------------

 var myObj = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh"
 };

 function checkObj(checkProp) {

  return (myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found");}


 checkObj("gift");

 --------------------------------------------------------------------------------------------------------------------

 var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },

 { "artist":"System of a Down",
    "title": "hypnotise",
  "release_year":1999,
  "formats":[
      "CD",
      "MP3"
  ],
}
];

--------------------------------------------------------------------------------------------------------------------

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};


var gloveBoxContents = myStorage.car.inside["passanger seat"];

--------------------------------------------------------------------------------------------------------------------

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];

--------------------------------------------------------------------------------------------------------------------

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

--------------------------------------------------------------------------------------------------------------------

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": ["artist"],
      "tracks": ["tracks"]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ "Addicted to Love"]
    },
    "5439": {
      "album": "ABBA Gold",
      "tracks": []
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else if (prop !== 'tracks') {
    collection[id][prop] = value;
  } else {
    collection[id][prop].push(value);
  }


  return collection;
}

updateRecords(5439, "artist", "ABBA");
updateRecords(1245, "album, Taking Love");

--------------------------------------------------------------------------------------------------------------------

var myArray = [];

for (var i = 1; i < 6; i ++ ) {
  myArray.push(i);

}

--------------------------------------------------------------------------------------------------------------------
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);

}

--------------------------------------------------------------------------------------------------------------------
var myArray = [];

for (var i = 9; i > 0; i-=2); {
 myArray.push(i);
}

--------------------------------------------------------------------------------------------------------------------
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

--------------------------------------------------------------------------------------------------------------------
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

  for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
}

lookUpProfile("Harry", "likes");


--------------------------------------------------------------------------------------------------------------------
