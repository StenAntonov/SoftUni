function solve(input){
    let heroesCount = Number(input.shift());
    let heroes = {};

    for ( let i = 0 ; i < heroesCount ; i++ ){
        let [name, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroes[name] = { 'hp': hp, 'mp': mp }
    }

    let command = input.shift();

    while(command !== 'End'){
        if(command.includes('CastSpell')){
            let [action, name , mana, spell] = command.split(' - ');
            mana = Number(mana);
            if(heroes[name].mp >= mana){
                heroes[name].mp -= mana;
                console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].mp} MP!`);
            }else{
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        }else if(command.includes('TakeDamage')){
            let [action, name, damage, attacker] = command.split(' - ');
            damage = Number(damage);
            heroes[name].hp -= damage;
            if(heroes[name].hp > 0){
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
            }else{
                delete heroes[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        }else if(command.includes('Recharge')){
            let [action, name, amount] = command.split(' - ');
            amount = Number(amount);
            let total = heroes[name].mp + amount;
            if(total > 200){
                let quantity = 200 - heroes[name].mp;
                heroes[name].mp = 200;
                console.log(`${name} recharged for ${quantity} MP!`);
            }else{
                heroes[name].mp += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }
        }else if(command.includes('Heal')){
            let [action, name, amount] = command.split(' - ');
            amount = Number(amount);
            let total = heroes[name].hp + amount;
            if(total > 100){
                let quantity = 100 - heroes[name].hp;
                heroes[name].hp = 100;
                console.log(`${name} healed for ${quantity} HP!`);
            }else{
                heroes[name].hp += amount;
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
        command = input.shift();
    }
    let sorted = Object.entries(heroes).sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]));
    sorted.forEach( hero => {
        console.log(`${[hero[0]]}\n  HP: ${hero[1].hp}\n  MP: ${hero[1].mp} `)
    });
}
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]
  );