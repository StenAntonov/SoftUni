function solve(input) {
    let change = Number(input.shift());
    let count = 0;
    let lv = parseInt(change);
    let st = Math.floor(change * 100 - lv * 100);
    
    while(lv > 0) {
        if(lv >= 2) {
            lv -= 2;
            count++;
        }else if(lv >= 1) {
            lv -= 1;
            count++;
        }
    }

    while (st > 0) {
        if(st >= 50) {
            st -= 50;
            count++;
        }else if(st >= 20) {
            st -= 20;
            count++;
        }else if(st >= 10) {
            st -= 10;
            count++;
        }else if(st >= 5) {
            st -= 5;
            count++;
        }
        else if(st >= 2) {
            st -= 2;
            count++;
        }else if(st >= 1) {
            st -= 1;
            count++;
        }
    }
    console.log(count)
}
solve([5.60])