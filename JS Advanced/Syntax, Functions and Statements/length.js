function length(str1 ,str2, str3){
    let one = str1.length;
    let two = str2.length;
    let three = str3.length;
    let sum = one + two + three;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}
length('chocolate', 'ice cream', 'cake');