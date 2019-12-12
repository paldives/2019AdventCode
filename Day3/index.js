let fs = require('fs');

exports.run = function() {
    let contents = fs.readFileSync('input', 'utf8');
    let inputs = contents.split('\n').map(i => i.split(','));
    // inputs = [
    //     'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'.split(','),
    //     'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'.split(',')
    // ];


    let biggerInput;
    let smallerInput;
    if(inputs[0].length > inputs[1].length) {
        biggerInput = inputs[0];
        smallerInput = inputs[1];
    } else {
        biggerInput = inputs[1];
        smallerInput = inputs[0];
    }

    let storage = {};
    let cord = {x: 0, y: 0};
    let step = 0;
    for(let i=0; i<biggerInput.length; i++) {
        let move = biggerInput[i];
        let dir = move.substring(0, 1);
        let mag = parseInt(move.substring(1));

        for(let j=0; j<mag; j++) {
            if(dir === 'U') {
                cord.y += 1;
            } else if(dir === 'D') {
                cord.y -= 1;
            } else if(dir === 'R') {
                cord.x += 1;
            } else if(dir === 'L') {
                cord.x -= 1;
            }
            step += 1;
    
            if(!storage[cord.x]) {
                storage[cord.x] = {};
            }
            storage[cord.x][cord.y] = step;
        }

        
    }

    let crossesPos = [];
    let crossesStep = [];
    cord = {x: 0, y: 0};
    step = 0;
    for(let i=0; i<smallerInput.length; i++) {
        let move = smallerInput[i];
        let dir = move.substring(0, 1);
        let mag = parseInt(move.substring(1));

        for(let j=0; j<mag; j++) {
            if(dir === 'U') {
                cord.y += 1;
            } else if(dir === 'D') {
                cord.y -= 1;
            } else if(dir === 'R') {
                cord.x += 1;
            } else if(dir === 'L') {
                cord.x -= 1;
            }
            step += 1;
    
            if(storage[cord.x] && storage[cord.x][cord.y]) {
                crossesPos.push({x: cord.x, y: cord.y});
                crossesStep.push({p1: storage[cord.x][cord.y], p2: step});
            }
        }
    }

    let distances = crossesPos.map(c => {
        return Math.abs(c.x) + Math.abs(c.y);
    });

    let steps = crossesStep.map(c => {
        return c.p1 + c.p2;
    })


    console.log('Day 3 : Part 1');
    let closest = Math.min(...distances);
    console.log(closest);

    console.log('Day 3 : Part 2');
    let fastest = Math.min(...steps);
    console.log(fastest);
}