function solve(arr){
    let resourses = {};
    for ( let i = 0 ; i < arr.length; i+=2 ) {
        let resourse = arr[i];
        let quantity = Number(arr[i+1]);
        if(!resourses.hasOwnProperty(resourse)) {
            resourses[resourse] = quantity;
        }else{
           resourses[resourse] += Number(quantity);

        }
    }
  
    for ( let type of Object.keys(resourses)){
        console.log(`${type} -> ${resourses[type]}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )