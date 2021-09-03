function houseParty(arr) {
    let list = [];
    let name = false;

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes('not')) {
            if (list.includes(arr[i].split(' ')[0])) {
                console.log(`${arr[i].split(' ')[0]} is already in the list!`);
            } else {
                list.push(arr[i].split(' ')[0]);
            }
        } else {
            if (list.includes(arr[i].split(' ')[0])) {
                let element = list.indexOf(arr[i].split(' ')[0]);
                list.splice(element, 1);
            } else {
                console.log(`${arr[i].split(' ')[0]} is not in the list!`);

            }
        }

    }
    for (let j = 0; j < list.length; j++) {
        console.log(list[j]);
        
        
    }


}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)