function smallShop(input) {
    let product = input.shift();
    let town = input.shift();
    let quantity = Number(input.shift());
    switch (product) {
        case "coffee":
            if (town === "Varna") {
                console.log(quantity * 0.45);
            } else if (town === "Plovdiv") {
                console.log(quantity * 0.40)
            } else {
                if (town === "Sofia") {
                    console.log(quantity * 0.50);
                }
            }; break;
        case "water":
            if (town === "Varna") {
                console.log(quantity * 0.70);
            } else if (town === "Plovdiv") {
                console.log(quantity * 0.70)
            } else {
                if (town === "Sofia") {
                    console.log(quantity * 0.80);
                }
            }; break;
        case "beer": 
        if (town === "Varna") {
            console.log(quantity * 1.10);
        } else if (town === "Plovdiv") {
            console.log(quantity * 1.15)
        } else {
            if (town === "Sofia") {
                console.log(quantity * 1.20);
            }
        }; break;
        case "sweets": 
        if (town === "Varna") {
            console.log(quantity * 1.35);
        } else if (town === "Plovdiv") {
            console.log(quantity * 1.30)
        } else {
            if (town === "Sofia") {
                console.log(quantity * 1.45);
            }
        }; break;
        case "peanuts":
                if (town === "Varna") {
                    console.log(quantity * 1.55);
                } else if (town === "Plovdiv") {
                    console.log(quantity * 1.50)
                } else {
                    if (town === "Sofia") {
                        console.log(quantity * 1.60);
                    }
                }; break;


    }
}
smallShop(["sweets",
"Sofia",
2.23
    ])