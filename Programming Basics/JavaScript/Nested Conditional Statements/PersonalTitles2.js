function personalTitles2(input) {
    let age = Number(input.shift());
    let sex = input.shift();
    if ( sex === "f") {
        if(age >= 16) {
            console.log("Ms.");
        }else{
                console.log("Miss");
            }
        
    }else {
        if(sex === "m") {
            if ( age >= 16) {
                console.log("Mr.");
            }else {
                console.log("Master");
            }
        }
    }

}
personalTitles2([14, "f"])