function fruitOrVegetable(input) {
    ;
    let product = input.shift();
    let result = 0;
    switch (product) {
        case "banana": result = "fruit"; console.log(result);break;
        case "apple": result = "fruit"; console.log(result);break;
        case "kiwi": result = "fruit"; console.log(result);break;
        case "cherry": result = "fruit"; console.log(result);break;
        case "lemon": result = "fruit"; console.log(result);break;
        case "grapes": result = "fruit"; console.log(result);break;
        case "tomato": result = "vegetable"; console.log(result);break;
        case "cucumber": result = "vegetable"; console.log(result);break;
        case "pepper": result = "vegetable";console.log(result); break;
        case "carrot": result = "vegetable";console.log(result); break;
        default: console.log("unknown")
    }
}
fruitOrVegetable(["cucumber"])