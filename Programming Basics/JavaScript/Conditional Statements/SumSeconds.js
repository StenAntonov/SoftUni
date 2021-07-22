function sumSeconds(input){
    let s1 = Number(input.shift());
    let s2 = Number(input.shift());
    let s3 = Number(input.shift());
    let totalTime = s1 + s2 + s3;
    let mins = parseInt(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(mins + ":0" + seconds )
    }else {
console.log(mins + ":" + seconds )
    }
}
sumSeconds([35, 45, 51])