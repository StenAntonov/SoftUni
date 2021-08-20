function sum(num) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str.charAt(i));
    }
    console.log(sum);
}
sum(12345)