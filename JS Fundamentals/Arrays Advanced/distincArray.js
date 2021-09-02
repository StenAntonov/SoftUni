function distingArray( input ) {
    for (let i = 0; i < input.length; i++) {
        let element = input.indexOf(input[i], i + 1);
        while(element !== -1){
            input.splice(element, 1);
            element = input.indexOf(input[i], i + 1);
        }
        
    }
    console.log(input.join(' '));
    
}
distingArray([20, 8, 12, 13, 4, 4, 8, 5]);