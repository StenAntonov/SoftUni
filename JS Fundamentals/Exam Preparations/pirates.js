function solve(input){
    let cities = {};
    let [city, pop, gold] = input.shift().split('||');
    
    while(city !== 'Sail'){
        pop = Number(pop);
        gold = Number(gold);
        if(cities.hasOwnProperty(city)){
            cities[city].pop += pop;
            cities[city].gold += gold;
        }else{
            cities[city] = {'pop': pop, 'gold': gold};
        }
        [city, pop, gold] = input.shift().split('||');
    }
    let order = input[0].split('=>')[0];
    
    while(order !== 'End'){
        if(order == 'Plunder'){
            let [orderToDo, city, pop, gold] = input.shift().split('=>');
            pop = Number(pop);
            gold = Number(gold);
            if(cities.hasOwnProperty(city)){
                cities[city].pop -= pop;
                cities[city].gold -= gold;
            }
            console.log(`${city} plundered! ${gold} gold stolen, ${pop} citizens killed.`)
            if(cities[city].pop == 0 || cities[city].gold == 0){
                delete cities[city];
                console.log(`${city} has been wiped off the map!`)
            }

        }else if( order == 'Prosper'){
            let [toDo, city, gold] = input.shift().split('=>');
            gold = Number(gold);
            if(gold >= 0){
                cities[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`)
            }else{
                console.log(`Gold added cannot be a negative number!`)
            }
        }
        order = input[0].split('=>')[0];
    }
    let count = Object.keys(cities).length;
    if(count > 0){
        let sorted = Object.entries(cities)
        .sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]));
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
        sorted.forEach(element => {
            console.log(`${element[0]} -> Population: ${element[1].pop} citizens, Gold: ${element[1].gold} kg`)
        });
    }else{
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}
solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
  ]);


  //(a, b) => b[1].gold - a[1].gold) || Object.entries(cities).sort((a, b) => a[0].localeCompare(b[0]));