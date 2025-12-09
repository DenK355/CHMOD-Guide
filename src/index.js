'use strict';

let getNum = prompt("Enter number 0 - 7");

switch (getNum) {

    case '0': 
        console.log("Access mode: ---")
        break;
        
    case '1': 
        console.log("Access mode: --x")
        break;

    case '2': 
        console.log("Access mode: -w-")
        break;

    case '3': 
        console.log("Access mode: -wx")
        break;

    case '4': 
        console.log("Access mode: r--")
        break;

    case '5': 

        console.log("Access mode: r-x")
        break;

    case '6': 
        console.log("Access mode: rw-")
        break;

    case '7': 
        console.log("Access mode: rwx")
        break;

    default :
        console.log("Incorrect value input!")
}