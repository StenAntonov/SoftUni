function replace(str1, char, str2) {
    let correct = str1.replace('_', char) ;
    if(correct == str2) {
        console.log('Matched');
    }else {
        console.log('Not Matched')
    }
}
replace ('Str_ng', 'I', 'Strong'); 
replace ('Str_ng', 'i', 'String');