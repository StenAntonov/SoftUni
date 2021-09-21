function solve(strOfWords, template) {
    let wordsSplitted = strOfWords.split(', ');
    let splittedTemp = template.split(' ');
        for (const current of wordsSplitted) {
            for (let present of splittedTemp) {
                if (present.length == current.length && present.includes("*")) {
                    let index = splittedTemp.indexOf(present);
                    splittedTemp[index] = current;
                }
            }
        }
    console.log(splittedTemp.join(' '));
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages');