function password(pass) {

    function passLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return `Password must be between 6 and 10 characters`;
        }

    }
    function currentChar(pass) {
        let isValid = false;
        for (let i = 0; i < pass.length; i++) {
            let currentCharacter = pass[i].charCodeAt(0);
            if (currentCharacter >= 48 && currentCharacter <= 57 ||
                currentCharacter >= 65 && currentCharacter <= 90
                || currentCharacter >= 97 && currentCharacter <= 122) {
                isValid = true;
            } else {
                isValid = false;break;
            }

        }
        return isValid === true ? true : `Password must consist only of letters and digits`;
    }
    function digits(pass) {
        let digitsCount = 0;
        for (let i = 0; i < pass.length; i++) {
            let currentCharacter = pass[i].charCodeAt(0);
            if (currentCharacter >= 48 && currentCharacter <= 57) {
                digitsCount++;
            }
        }
        return digitsCount >= 2 ? true : "Password must have at least 2 digits";
    }

    let result = [];
    if (passLength(pass) !== true) {
        result.push(passLength(pass));
    } if (currentChar(pass) != true) {
        result.push(currentChar(pass));
    }
    if (digits(pass) !== true) {
      result.push(digits(pass));
    }
    if(passLength(pass) === true && currentChar(pass) === true && digits(pass) === true){
        result.push(`Password is valid`);
    }
    return result.join('\n')
}
console.log(password('Ps$s$s'));
