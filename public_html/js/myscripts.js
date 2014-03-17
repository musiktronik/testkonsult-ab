/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * file - myscripts.js
 */

/**
 * Funktion som skapar en hälsningsruta
 * @argument {inparameter} name name to be printed
 */
function hello(name) {
  alert("Hejsan, svejsan " + name);
}

/**
 * Funktion som utvärderar ett gissat tal
 * @returns {undefined}
 */
function ifExampleOne() {
  var correct = 4711;
  var guess;

  guess = prompt("Gissa ett tal!", "");
  if (guess === correct) {
    alert("Rätt :-)");
  }
  else {
    alert("Fel :-(");
  }
}

/**
 * Funktion som skriver ut en lista
 * @returns {undefined}
 */
function forExampleOne() {
  var result = 0;
  for (var i = 0; i < 10; i++) {
    //document.write(i + '<br>');
    result = result + i + "<br />";
  }
  document.getElementById("result").innerHTML = result;
}

/**
 * Funktion som skriver ut ett meddelande tills den avbryts
 * @returns {undefined}
 */
function doExampleOne() {
  var go_on = true;
  while (go_on) {
    alert("Jag skriver ut en rad text!!");
    go_on = confirm("Fortsätta ?");
  }
}

/**
 * Funktion som söker i en array
 * @returns {undefined}
 */
function searchExampleOne() {
  var SIZE = 20;
  var search_item = 0;
  var item_index = 0;
  var hit_ok = false;
  var value = new Array;
  var result = "";

  result = result + "Lista att söka i" + "<br>";			//Skapa slumpad lista
  for (var number = 1; number <= SIZE; number = number + 1) {
    value[number] = 100 * Math.random();
    value[number] = Math.round(value[number]);
    result = result + number + " : " + value[number] + "<br>";
  }
  result = result + "<br>";
  document.getElementById("result").innerHTML = result;  

  search_item = eval(prompt("Ange tal att söka efter !", "47"));

  for (var i = 1; i <= SIZE; i++) {
    if (value[i] === search_item) {
      item_index = i;
      hit_ok = true;
    }
  }
  if (hit_ok) {
    result = result + "Det sökta talet finns i position " + item_index;
  }
  else {
    result = result + "Det sökta talet finns inte i listan!! ";
  }
  document.getElementById("result").innerHTML = result;  
}

/**
 * Funktionen sorterar en lista med slumptal mellan 0 - 100 i storleksordning
 * Algoritmens delsteg skrivs ut
 * @argument {input} SIZE size of array to sort
 * @returns {void}
 */
function bubbleSortShow(SIZE) {
  //var SIZE = 4;	//Antal tal i listan
  var temp;
  var value = new Array;
  var result = "";

  result = "Osorterad lista" + "<br>";			//Skapa slumpad lista
  for (var number = 1; number <= SIZE; number = number + 1) {
    value[number] = 100 * Math.random();
    value[number] = Math.round(value[number]);
    result = result + number + " : " + value[number] + "<br>";
  }
  result = result + "<br>";
  document.getElementById("result").innerHTML = result;    

  for (var i = 1; i < SIZE; i++) { 				//Bubblesort
    for (var j = 1; j < SIZE - i + 1; j++) {
      if (value[j] > value[j + 1]) {
        temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
      }
      result = result + "Steg " + i + "." + j + "<br>";
      document.getElementById("result").innerHTML = result;  
      
      for (number = 1; number <= SIZE; number = number + 1) {
        result = result + number + " : " + value[number] + "<br>";
      }
    }
    result = result + "Efter steg " + i + "<br>";
    document.getElementById("result").innerHTML = result;  
    
    for (number = 1; number <= SIZE; number = number + 1) {
      result = result + number + " : " + value[number] + "<br>";
    }
    result = result + "<br>";
  }
  document.getElementById("result").innerHTML = result;    

  result = result + "<br>" + "Sorterad lista" + "<br>";
  for (number = 1; number <= SIZE; number = number + 1) {
    result = result + number + " : " + value[number] + "<br>";
  }
  document.getElementById("result").innerHTML = result;    
}

/**
 * Funktionen sorterar en lista med slumptal mellan 0 - 100 i storleksordning
 * @returns {void}
 */
function bubbleSort() {
  var SIZE = 10;	//Antal tal i listan
  var temp;
  var value = new Array;
  var result;

  result = "Osorterad lista" + "<br>";
//  document.write("Osorterad lista" + "<br>");			//Skapa slumpad lista
  for (var number = 1; number <= SIZE; number = number + 1) {
    value[number] = 100 * Math.random();
    value[number] = Math.round(value[number]);
    result = result + number + " : " + value[number] + "<br>";
  }
  result = result + "<br>";

  for (var i = 1; i < SIZE; i++) { 				//Bubblesort
    for (var j = 1; j < SIZE - i + 1; j++) {
      if (value[j] > value[j + 1]) {
        temp = value[j];
        value[j] = value[j + 1];
        value[j + 1] = temp;
      }
    }
  }

  result = result + "<br>" + "Sorterad lista" + "<br>";
//  document.write("<br>" + "Sorterad lista" + "<br>");		//Visa resultatet
  for (number = 1; number <= SIZE; number = number + 1) {
    result = result + number + " : " + value[number] + "<br>";
  }
  document.getElementById("result").innerHTML = result;    
}

/**
 * Programmet skriver ut en array av tal
 * @returns {void}
 */
function arrayExampleOne() {
  var value = new Array;
  var result = 0;
  for (var number = 0; number <= 100; number++) {
    value[number] = number * 10;
    result = result + number + " : " + value[number] + "<br>";
  }
  document.getElementById("result").innerHTML = result;  
}

/**
 * Program som beräknar en varas pris inkl moms
 * Indata - pris utan moms
 * Utdata - pris inklusive moms
 *
 * @returns {void}
 */
function momsExampleOne() {
  var inpris; 	// varans inköpspris
  var utpris;   // det konsumenten betalar inkl moms
  var moms;     // varans momspålägg (antag 25%)

  inpris = prompt("Ange varans inköpspris i kr!", "");
  moms = inpris * 0.25;  	// beräkna momsen. obs decimalpunkten!!
  utpris = inpris * 1.0 + moms;	// beräkna utpriset - omvandla till tal

  alert("Konsumenten ska betala " + utpris + " kr!");
}