let fs = require('fs');

function calcFuelRecursive(input, total) {
    total = total || 0;
    let fuel = Math.floor(input/3)-2;
    if(fuel>0) {
        total += fuel;
        return calcFuelRecursive(fuel, total);
    }
    return total;
}
function calcFuelIterative(input) {
    let total = 0;
    while(input>0) {
        let fuel = Math.floor(input/3)-2;
        total += fuel>0 ? fuel : 0; // Dont add negative fuel
        input = fuel;
    }
    return total;
}

exports.run = function() {
    let contents = fs.readFileSync('input', 'utf8');

    console.log('Day 1 : Part 1');
    let input = contents.split('\n');
    // let output = 0;
    // for(let i=0; i<input.length; i++) {
    //     let massS = input[i];
    //     let massI = parseInt(massS);
    //     let fuel = Math.floor(massI/3)-2;
    //     output += fuel;
    // }
    // console.log(output);

    let outputF = input.map(v => parseInt(v));
    outputF = outputF.reduce((a, v) => a + Math.floor(v/3)-2, 0); // Need the zero at the end of reduce to not use first element of the array.
    console.log(outputF);

    console.log('Day 1 : Part 2');

    let output2Rec = 0;
    let output2Itt = 0;
    input.forEach(v => {
        let mass = parseInt(v);
        output2Rec += calcFuelRecursive(mass);
        output2Itt += calcFuelIterative(mass);
    });
    console.log(output2Rec);
    console.log(output2Itt);
}