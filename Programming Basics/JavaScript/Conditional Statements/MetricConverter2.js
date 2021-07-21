function metricConverter(input) {
    let leg = Number(input.shift());
    let ent = input.shift();
    let out = input.shift();

    switch (ent) {
        case 'mm': leg = leg / 1000;break;
        case 'cm': leg = leg / 100;break;
    }
    switch (out) {
        case 'mm': leg = leg * 1000;break;
        case 'cm': leg = leg * 100;break;
    }
    console.log(leg.toFixed(3));
 }
 metricConverter([12, 'mm', 'm'])