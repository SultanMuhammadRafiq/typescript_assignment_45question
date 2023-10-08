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
/*var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}

console.table(fullNames)*/
/*function applyDiscount(price: number, discount: number = 0.20): number {
  return price * (1 - discount);
}

console.log(applyDiscount(3250)); // 95*/
/*function Job(Job_title: string,
    ...people: string[]) {
return people.join(", ") + " are " + Job_title;
}

console.log(Job("Player", "Babar Azam",
    "Shaheen Afridi", "Haris Rauf","Rizwan"));
console.log(Job("Doctor", "Hamza", "Yasmin"));*/
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("myText", myCallBack);
