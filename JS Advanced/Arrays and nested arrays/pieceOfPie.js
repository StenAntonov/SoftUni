function solve(flavours, first, last){
    let indexStart = flavours.indexOf(first);
    let indexLast = flavours.indexOf(last);
    let result = flavours.slice(indexStart, indexLast + 1);
    return result;
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));