function loadingBar(num) {
    let bar = ['[','.','.','.','.','.','.','.','.','.','.',']'].join('');
    for ( let i = 1 ; i <= num/10 ; i++ ) {
        bar =(bar.replace(bar.charAt(i), '%'));
    }
    if(num !== 100) {
    console.log(num + "% " + bar + "\nStill loading..." );
    }else{
        console.log("100% Complete!" + "\n"+ bar);
        
    }
}
loadingBar(100)