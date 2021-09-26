function solve(input) {
    input = input[0];
    let coolEmojis = [];
    let treshold = 1;
    let emojis = [];
    let digitsPattern = /\d/g;
    if (digitsPattern.test(input)) {
        let matches = input.match(digitsPattern);
        matches.forEach(element => {
            treshold *= element;
        });
    }

    let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    if (emojiPattern.test(input)) {
        emojis = input.match(emojiPattern);
    }
    for (let currentEmoji of emojis) {
        let current = currentEmoji.slice(2, -2);
        let score = 0;
        for (let i = 0; i < current.length; i++) {
            let points = current.charCodeAt(i);
            score += points;
        }
        if (score > treshold) {
            coolEmojis.push(currentEmoji);
        }
    }
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    if (coolEmojis.length > 0) {
        coolEmojis.forEach(x => console.log(x))
    }
}
solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]
)