function tradeCommissions(input){
    let town = input.shift();
    let count = Number(input.shift());
    let commision = 0;
    if(town === "Sofia") {
        if ( count >= 0 && count <= 500){
            commision = count * 0.05;
        }else if(count > 500 && count <= 1000){
            commision = count * 0.07;
        }else if(count > 1000 && count <= 10000){
            commision = count * 0.08;
        }else if(count > 10000 ){
            commision = count * 0.12;
        }else {
            console.log("error");
        }
    }else if(town === "Varna") {
        if ( count >= 0 && count <= 500){
            commision = count * 0.045;
        }else if(count > 500 && count <= 1000){
            commision = count * 0.075;
        }else if(count > 1000 && count <= 10000){
            commision = count * 0.10;
        }else if(count > 10000 ){
            commision = count * 0.13;
        }else {
            console.log("error");
        }
    }else if(town === "Plovdiv") {
        if ( count >= 0 && count <= 500){
            commision = count * 0.055;
        }else if(count > 500 && count <= 1000){
            commision = count * 0.08;
        }else if(count > 1000 && count <= 10000){
            commision = count * 0.12;
        }else if(count > 10000 ){
            commision = count * 0.145;
        }else {
            console.log("error");
        }
    }else {
        console.log("error");
    }
    if(commision !== 0) {
        console.log(commision.toFixed(2));
    }
} 
tradeCommissions(["Kaspichan",
-50
    ])