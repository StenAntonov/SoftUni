function MetricConverter(input){
    let leg = Number(input.shift());
    let vh = input.shift();
    let izhod = input.shift();
    if (vh == "mm" ){
        leg /= 1000
    }else if(vh == "cm"){
        leg /= 100
    }
    if (izhod == "mm"){
        leg *= 1000
        console.log(leg.toFixed(3));
    }else if (izhod == "cm"){
        leg *= 100
      console.log(leg.toFixed(3));
    }else {
    console.log(leg.toFixed(3));
    }
}
MetricConverter([45, "cm", "mm"])