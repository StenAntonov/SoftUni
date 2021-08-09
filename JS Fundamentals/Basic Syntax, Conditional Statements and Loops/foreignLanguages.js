function solve(country) {
    let language = "unknown";
    if (country == "USA" || country == "England") {
        language = "English";
        console.log(language);
    } else if (country == "Spain" || country == "Argentina" || country == "Mexico") {
        language = "Spanish";
        console.log(language);
    }else {
        console.log(language)
    }
}
solve("Guatemala")