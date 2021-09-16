function solve(input) {
    let travelBook = {};

    for (let line of input) {
        let [country, town, price] = line.split(' > ');
        price = Number(price);
        if (!travelBook.hasOwnProperty(country)) {
            travelBook[country] = {};
        }
        if (!travelBook[country].hasOwnProperty(town)) {
            travelBook[country][town] = Number.MAX_SAFE_INTEGER;
        }
        if (travelBook[country][town] > price) {
            travelBook[country][town] = price;
        }
    }

    let countriesSorted = Object.keys(travelBook).sort();
    for (let state of countriesSorted) {
        let forPrint = "";
        forPrint += (state + " -> ");
        let sortedByPrice = Object.keys(travelBook[state]).sort((a, b) => travelBook[state][a] - travelBook[state][b]);
        for (let obj of sortedByPrice) {
            forPrint += (obj + " -> " + travelBook[state][obj]+ " ");

        }

        console.log(forPrint.trim());


    }

}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);