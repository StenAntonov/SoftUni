function PetShop(input) {
    let kuche = Number(input.shift());
    let negovi = Number(input.shift());
    let obshto = kuche * 2.50 + negovi * 4;
console.log( obshto.toFixed(2) + " lv.");
}
PetShop([13,9])