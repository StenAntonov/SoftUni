function bombNumbers(arr, bomb) {
    let nums = arr.slice();
    let copyOfBomb = bomb.slice();
    let bombNum = copyOfBomb.shift();
    let bombPower = copyOfBomb.shift();

    for (let i = 0; i < nums.length; i++) {

        
        if (nums[i] === bombNum) {
            let bombIndex = nums.indexOf(bombNum);
            let startIndex = Math.max(bombIndex - bombPower, 0);
            nums.splice(bombIndex, bombPower + 1)
            nums.splice(startIndex, bombPower);
            i = 0;
        }

    }
    let sum = 0;
    for(j = 0 ; j < nums.length ; j++) {
        sum += nums[j];
    }
    console.log(sum);
    
    
        
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);