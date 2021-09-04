function sortByTwo(arr){
    
    let byAlpha = arr.sort( (a,b) => a.localeCompare(b));
    let byNum = byAlpha.sort((a,b) => (a.length - b.length));
    console.log(byNum.join("\n"));
    
}
sortByTwo(["Isacc", "Theodor", "Jack", "Harrison", "George"]);