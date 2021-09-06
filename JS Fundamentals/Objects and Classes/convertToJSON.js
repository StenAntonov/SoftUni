function converter(name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }
     let asString = JSON.stringify(person);
    console.log(asString);
    
}
converter('George',
'Jones',
'Brown'
)