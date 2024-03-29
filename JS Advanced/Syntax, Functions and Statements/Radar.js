function solve(speed, area) {
    let status = '';
    let limit = 0;
    let difference = 0;

    switch(area){
        case "motorway": limit = 130; break;
        case "interstate": limit = 90; break;
        case "city": limit = 50; break;
        case "residential": limit = 20; break;
    }
    difference = speed - limit;
    
    if(difference <= 0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }else if(difference > 0){
        if(difference <= 20){
            status = "speeding";
        }else if ( difference <= 40){
            status = "excessive speeding";
        }else if ( difference > 40){
            status = "reckless driving";
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
solve(140, 'motorway');