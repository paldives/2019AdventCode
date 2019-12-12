let fs = require('fs');

function evaluate(x) {
    let strX = String(x);
    let containsDouble = false;
    let doesNotDecrement = true;

    for(let i=0; i<strX.length-1; i++) {
        let p = strX[i];
        let pPlusOne = strX[i+1];
        if(p===pPlusOne){
            containsDouble = true;
        } else if(p>pPlusOne){
            doesNotDecrement = false;
        }
    }

    return containsDouble && doesNotDecrement;
}
function evaluateTwo(x) {
    let strX = String(x);
    let containsDouble = false;
    let doesNotDecrement = true;
    let dupCounter = {};

    for(let i=0; i<strX.length-1; i++) {
        let p = strX[i];
        let pPlusOne = strX[i+1];
        if(p===pPlusOne){
            containsDouble = true;
            if(!dupCounter[p]) {
                dupCounter[p] = 1;
            }
            dupCounter[p] = dupCounter[p]+1
        } else if(p>pPlusOne){
            doesNotDecrement = false;
        }
    }

    if(containsDouble) {
        let dupKeys = Object.keys(dupCounter);
        let fixBool = false;
        for(let i=0; i<dupKeys.length; i++) {
            if(dupCounter[dupKeys[i]]-2 === 0) {
                fixBool = true;
                break
            }
        }
        containsDouble = fixBool;
    }

    return containsDouble && doesNotDecrement;
}


exports.run = function() {
    let min = 273025;
    let max = 767253;
    
    console.log('Day 4 : Part 1');
    let counter = 0;
    for(let i=min ; i<=max; i++) {
        if(evaluate(i)) {
            counter++;
        }
    }
    console.log(counter);

    console.log('Day 4 : Part 2');
    counter = 0;
    for(let i=min ; i<=max; i++) {
        if(evaluateTwo(i)) {
            counter++;
        }
    }
    console.log(counter);
}