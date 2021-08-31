function passwordValidator(pass) {
    let passLength = pass.length;
    let currentCharacter = '';
    let isValid = false;
    let falseSymbol = 0;
    let digitCounter = 0;

    for (let i = 0; i < pass.length; i++) {
        isValid = false;
        currentCharacter = pass[i].charCodeAt(0);
        if(currentCharacter >= 48 && currentCharacter <= 57){
            isValid = true;
            digitCounter++;
        }
        if(currentCharacter >= 65 && currentCharacter <= 90 || currentCharacter >= 97 && currentCharacter <= 122) {
            isValid = true;
        }
        if(isValid === false) {
            falseSymbol++
            break;
        }
    }
    
    if (passLength >= 6 && passLength <= 10 && digitCounter >= 2) {
        console.log("Password is valid");
    } else {
        if (passLength < 6 || passLength > 10) {
            console.log("Password must be between 6 and 10 characters");
        }
        if ( falseSymbol > 0 ){
            console.log(`Password must consist only of letters and digits`);
        }
        if (digitCounter < 2) {
            console.log("Password must have at least 2 digits");
        }

    }

}
passwordValidator('MyPass123')

