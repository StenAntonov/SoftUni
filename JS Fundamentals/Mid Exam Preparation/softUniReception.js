function solve(input) {
    let [eff1, eff2, eff3, students] = input.map(Number);
    let efficiency = eff1 + eff2 + eff3;
    let hours = 0;

    while(students > 0) {
        hours++
        if (hours % 4 != 0) {
            students -= efficiency;
        }
    }
    console.log(`Time needed: ${hours}h.`);
    

}
solve(['1', '1', '1', '10000']);
solve(['100','100','100','0']);
solve(['3','2','5','40']);