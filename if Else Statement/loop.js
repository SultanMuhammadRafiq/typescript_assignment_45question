"use strict";
/*for(var i=0;i<8;i++){
    console.log("Hello World")
}*/
/*for(var i=0;i<3;i++){
    console.log("Hello World+i")
}*/
/*var cleanestCities=["Karachi","Lahore","Islamabad","Peshawar"];
for(var i=0;i<=4;i++){
    if("Islamabad"===cleanestCities[i]){
        console.log("Its one of the Cleanest Cities ");
        
    }
}*/
/*var cleanestCities=["Karachi","Lahore","Islamabad","Peshawar"];
var matchFound="no";
for(var i=0;i<=4;i++){
    if("Islamabad"===cleanestCities[i]){
        matchFound="yes";
        alert("its one of the Cleanest Cities")
    }
    }
    if(matchFound==="no"){
        alert("Its not on the list ");
    }*/
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        matchFound = true;
        console.log("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false) {
    console.log("It's not on the list");
}
