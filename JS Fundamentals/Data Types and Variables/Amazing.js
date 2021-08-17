function Amazing(num) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length ; i++) {
        sum += Number(str[i]);
    }
    let string = sum.toString();
    if(string.includes('9')) {
        console.log(`${num} Amazing? True`)
    }else{
    console.log(`${num} Amazing? False`);
    }

}
Amazing(999)
