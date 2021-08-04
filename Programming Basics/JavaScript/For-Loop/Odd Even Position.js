function solve(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    
    let oddMin = Number.MAX_SAFE_INTEGER;
    if(n >= 1) {
        oddMin = Number.MAX_SAFE_INTEGER;
    }else {
        oddMin = "No";
    }
    let oddMax = Number.MIN_SAFE_INTEGER;
    if(n >= 1) {
        oddMax = Number.MIN_SAFE_INTEGER;
    }else {
        oddMax = "No";
    }
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    if(n >= 2) {
        evenMin = Number.MAX_SAFE_INTEGER;
    }else {
        evenMin = "No";
    }
    let evenMax = Number.MIN_SAFE_INTEGER;
    if(n >= 2) {
        evenMax = Number.MIN_SAFE_INTEGER;
    }else {
        evenMax = "No";
    }
    for(i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if(i % 2 !== 0){
            oddSum += num;
            if(num < oddMin) {
                oddMin = num
            }
            if(num > oddMax) {
                oddMax = num;
            }
        }else if(i % 2 === 0){
            evenSum += num;
            if(num < evenMin) {
                evenMin = num
            }
            if(num > evenMax) {
                evenMax = num;
            }
        }

    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if(oddMin === "No") {
        console.log('OddMin=No,')
    }else {
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if(oddMax === "No") {
        console.log('OddMax=No,')
    }else {
    console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if(evenMin === "No") {
        console.log('EvenMin=No,')
    }else {
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }
    if(evenMax === "No") {
        console.log('EvenMax=No')
    }else {
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
solve([1
    -5
    ])