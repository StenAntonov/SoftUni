function specialNumbers(num) {
    let currNum = 0;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        currNum = i;
        if ( currNum > 10) {
            let str = currNum.toString().split('');
            let len = str.length;
            for(  j=0 ; j < len ; j++){
                sum += Number(str[j])
            }
        }
        if(sum != 0) {
            if(sum == 5 || sum == 7 || sum == 11){
                console.log(`${i} -> True`)
            }else{
            console.log(`${i} -> False`);
            }
        }else if( i == 5 || i == 7 || i == 11){
            console.log(`${i} -> True`)
        }else{
                console.log(`${i} -> False`);
            }
        sum = 0;

    }
}
specialNumbers(50)