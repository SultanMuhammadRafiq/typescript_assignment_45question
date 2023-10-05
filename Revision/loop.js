/*for (let k=0;k<8;k++){
    console.log(`Student ID #  ${k}`)
}*/
/*var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
for (var i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    console.log("It's one of the cleanest cities & Beautiful city in Pakistan");
    break;
  }
}*/
/*var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var matchFound = "no";
for (var i = 0; i <= 4; i++){
if ("Islambad" === cleanestCities[i]) {
  matchFound = "yes";
  alert("It's one of the cleanest cities");
}
}
if (matchFound === "no") {
  alert("It's not on the list");
}*/
/*var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities" );
    break;
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}*/
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
console.table(fullNames);
