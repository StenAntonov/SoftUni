function solve(...input) {
    
    let myObj = {};

    for (let present of input) {
        let type = typeof (present);
        if(myObj.hasOwnProperty(type)){
            myObj[type] += 1;
        }else{
            myObj[type] = 1;
        }
        console.log(`${type}: ${present}`);
    }

    Object.keys(myObj).sort((a, b) => myObj[b] - myObj[a]).forEach(key => console.log(`${key} = ${myObj[key]}`));

};
solve({ name: 'bob'}, 3.333, 9.999);
