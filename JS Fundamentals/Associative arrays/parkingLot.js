function solve(input){
    let parkingLot = {};

    for ( let line of input ){
        let [direction, number] = line.split(", ")
        if(direction == 'IN' && !parkingLot.hasOwnProperty(number)){
            parkingLot[number] = number;
        }else if( direction == "OUT" && parkingLot.hasOwnProperty(number)){         
            delete parkingLot[number];
        }
        
    }
    let sorted = Object.keys(parkingLot).sort().forEach( x => console.log(x));
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);