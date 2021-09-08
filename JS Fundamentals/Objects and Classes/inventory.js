function solve(arr) {
    let heroes = [];

    for (const line of arr) {
        let [Hero, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ').sort( (a,b) => a.localeCompare(b)).join(', ');
    
        let heroObj = {
            Hero,
            level,
            items
        }
        heroes.push(heroObj);
    }
    heroes.sort( (a,b) => a.level - b.level);
    heroes.forEach( x => {
        console.log(`Hero: ${x.Hero}\nlevel => ${x.level}\nitems => ${x.items}`);
        
    })
    
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );