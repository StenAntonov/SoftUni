function solve(input) {
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let str = input[i];
        let pattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/g;
        if (pattern.test(str)) {
            let match = str.match(pattern);
            match = match[0];
            let productGroup = '';
            let digits = match.match(/\d+/g);
            if (digits) {
                digits.forEach(element => {
                    productGroup = productGroup.concat(element);
                });
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        }else {
            console.log(`Invalid barcode`);
        }
    }
}
solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]
)