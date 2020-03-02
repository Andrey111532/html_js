"use strict";

menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



/*let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!*/

/*let value = prompt("Введите число");

if(value < 0) {
    value *= -1;
}

alert(value);*/

/*let month = +prompt("цифра")

switch(month) {
    case 1: 
        alert("January");
        break;
    case 2: 
        alert("February")
        break;
    case 3: 
        alert("March")
        break;

}*/
/*let age = 3;

for(; age <=7;) {
    console.log(age++)
}*/

/*function printHello(name){
    if (name === undefined){
        return;
    }
    console.log("Hello, " + name );
}
printHello("Tom");*/

function hanoi (cir, start, mid, end){
    if (cir === 1){
    console.log(start, "->", + end);
    return;
    }

    hanoi(cir - 1, start, end, mid);
    console.log(start, "->", end);


   

