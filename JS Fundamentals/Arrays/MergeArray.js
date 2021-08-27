function merge(arrFirst, arrSecond) {
    let newArray = [];
    let counter = 0;
    for (const el of arrFirst) {
        let result = 0;
        if (counter % 2 == 0) {
             result = Number(el) + Number(arrSecond[counter]);
        }else{
            result =`${el}${arrSecond[counter]}`;
        }
        counter++
        newArray.push(result);
    }
    console.log(newArray.join(' - '));
}
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)