function solve(input) {
    let n = Number(input.shift());
    let salary = Number(input.shift());

    for (i = 0; i < n; i++) {
        let website = input.shift();
        switch (website) {
            case "Facebook":
                salary -= 150;break;
            case "Instagram":
                salary -= 100;break;    
            case "Reddit":
                salary -= 50;break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(parseInt(salary));
    }
}
solve([3,
    500,
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"
])