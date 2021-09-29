function solve(input){
    let piecesCount = Number(input.shift());
    let pieces = {};
    for ( let i = 0 ; i < piecesCount ; i++ ){
        let [name, composer, key] = input.shift().split('|');
        pieces[name] = { composer, key};
    }

    let command = input.shift();
    
    while(command !== 'Stop'){
        if(command.includes('Add')){
            let [action, name, composer, key] = command.split('|');
            if(!pieces.hasOwnProperty(name)){
                pieces[name] = {composer, key};
                console.log(`${name} by ${composer} in ${key} added to the collection!`);
            }else{
                console.log(`${name} is already in the collection!`);
            }
        }else if(command.includes('Remove')){
            let [action, name] = command.split('|');
            if(pieces.hasOwnProperty(name)){
                delete pieces[name];
                console.log(`Successfully removed ${name}!`);
            }else{
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }else if(command.includes('ChangeKey')){
            let [action, name, newKey] = command.split('|');
            if(pieces.hasOwnProperty(name)){
                pieces[name].key = newKey;
                console.log(`Changed the key of ${name} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
        command = input.shift();
    }

    let sorted = Object.keys(pieces).sort((a, b) => a.localeCompare(b) || pieces[a].key.localeCompare(pieces[b].key));
    sorted.forEach( x => console.log(`${x} -> Composer: ${pieces[x].composer}, Key: ${pieces[x].key}`));
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
  ]
  )