function timePlus15Min(input){ 
    let startHours = Number(input.shift());
    let startMin = Number(input.shift());
    let minutes = startHours * 60 + startMin
    let plus15 = minutes + 15
    let kraiHours = parseInt(plus15 / 60);
    if (kraiHours >= 24) {
    kraiHours -= 24;
    }
    let KraiMin = plus15 % 60;
   if (KraiMin < 10) {
        console.log(`${kraiHours}:0${KraiMin}`);
    }else 
    console.log(`${kraiHours}:${KraiMin}`);
}
timePlus15Min([23, 59])