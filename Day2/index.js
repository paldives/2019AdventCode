let fs = require('fs');

function process(noun, verb) {
    let contents = fs.readFileSync('input', 'utf8');

    let input = contents.split(',').map(v => parseInt(v));
    input[1] = noun
    input[2] = verb;
    let pos = 0;
    while(pos < input.length+100){ // Keep running till break but dont allow it to run forever incase of error
        let instruction = input[pos];

        if(instruction===99) {
            break;
        } else if(instruction !== 1 && instruction !== 2) {
            throw 'unknown op-code : '+instruction;
        }

        let firstNumPos = input[pos+1];
        let secondNumPos = input[pos+2];
        let finalNumPos = input[pos+3];

        let fNum = input[firstNumPos];
        let sNum = input[secondNumPos];
        input[finalNumPos] = instruction===1 ? fNum+sNum : fNum*sNum;

        pos += 4;
    }
    return input[0];
}

exports.run = function() {

    console.log('Day 2 : Part 1');
    console.log(process(12, 2))
    
    console.log('Day 2 : Part 2');
    let found = false
    for(let i=0;i<100;i++) {
        for(let j=0;j<100;j++) {

            if(process(i,j) === 19690720) {
                console.log(100*i+j);
                found = true;
            }
            if(found) {
                break;
            }
        }
        if(found) {
            break;
        }
    }

    

    //console.log(); // 8017076
}