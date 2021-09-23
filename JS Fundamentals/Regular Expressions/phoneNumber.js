function solve([input]){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let matched = pattern.exec(input);
    let result = [];
    while(matched !== null){
        result.push(matched[0]);
        matched = pattern.exec(input);
    }
    console.log(result.join(', '));
}
solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ]
  )