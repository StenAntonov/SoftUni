function BonusScore(input) {
    let score = Number(input.shift());
    let bonus = 0.0;
    if (score <= 100) {
        bonus = 5;
        if (score % 2 == 0) {
            bonus = bonus + 1;
        } else if (score % 10 == 5)
            bonus = bonus + 2;
        console.log(bonus);
        console.log(bonus + score);
    }
    else if (score >= 100 && score <= 1000) {
        bonus = score * 0.20;
        if (score % 2 == 0) {
            bonus = bonus + 1;
        } else if (score % 10 == 5)
            bonus = bonus + 2;
        console.log(bonus);
        console.log(bonus + score);
    } else {
        bonus = score * 0.10;
        if (score % 2 == 0) {
            bonus = bonus + 1;
        } else if (score % 10 == 5)
            bonus = bonus + 2;
        console.log(bonus);
        console.log(bonus + score);
    }
}
BonusScore([35])
