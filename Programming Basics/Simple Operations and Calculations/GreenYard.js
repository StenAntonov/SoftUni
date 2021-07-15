function Yard(input) {
    let kv = Number(input.shift());
    let cena = 7.61 * kv;
    let otstypka = 0.18 * cena;
    let total = cena - otstypka;
    console.log("The final price is: " + total.toFixed(2) + " lv.");
    console.log("The discount is: " + otstypka.toFixed(2) + " lv.");
}
Yard([540])