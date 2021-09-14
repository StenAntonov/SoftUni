function solve(arr){
    let players ={};
    let colors = {
        "S": 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let power = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    for (let set of arr) {
        let [name, cards] = set.split(': ');
        cards = cards.split(', ');
        if(!players.hasOwnProperty(name)){
            players[name] = [];
        }

        players[name].push(...cards);
        
    }

    for ( let x in players) {
        players[x] = new Set(players[x]);
        
    }
    for ( let name of Object.keys(players)){
        players[name] = Array.from(players[name]);
    }

    for (let key of Object.keys(players)){
        let total = 0;
        let elements = players[key].forEach(el => {
            let elements = el.split('');
            let color = elements.pop();
            let cardNum = elements.join('');
            if(isNaN(cardNum)){
                cardNum = power[cardNum];
            }
            color = colors[color];
            total += color * cardNum;
        });
        console.log(`${key}: ${total}`);
        

    
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);