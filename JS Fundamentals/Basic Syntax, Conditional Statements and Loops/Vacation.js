function vacation(count, type, day) {
    //     "Total price: {price}". The price should be formatted to the second decimal point.
    // 	Friday	Saturday	Sunday
    // Students	8.45	9.80	10.46
    // Business	10.90	15.60	16
    // Regular	15	20	22.50


    // There are also discounts based on some conditions:
    // ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
    // ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
    // ·	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
    let totalSum = 0;
    let discount = 0;
    if (type == "Students" && day == "Friday") {
        if (count >= 30) {
            discount = 0.15;
        }
        let pricePerOne = 8.45;
        totalSum = count * pricePerOne;
        let totalSumAfterDicscount = totalSum - (totalSum * discount);
        console.log(`Total price: ${totalSumAfterDicscount.toFixed(2)}`);
    } else if (type == "Students" && day == "Saturday") {
        if (count >= 30) {
            discount = 0.15;
        }
        let pricePerOne = 9.80;
        totalSum = count * pricePerOne;
        let totalSumAfterDicscount = totalSum - (totalSum * discount);
        console.log(`Total price: ${totalSumAfterDicscount.toFixed(2)}`);
    } else if (type == "Students" && day == "Sunday") {
        if (count >= 30) {
            discount = 0.15;
        }
        let pricePerOne = 10.46;
        totalSum = count * pricePerOne
        let totalSumAfterDicscount = totalSum - (totalSum * discount);
        console.log(`Total price: ${totalSumAfterDicscount.toFixed(2)}`);
    }
    if (type == "Business" && day == "Friday") {
        let pricePerOne = 10.90;
        if (count >= 100) {
            discount = 10 * pricePerOne;
        }
        totalSum = (count * pricePerOne) - discount;
        console.log(`Total price: ${totalSum.toFixed(2)}`);
    } else if (type == "Business" && day == "Saturday") {
        let pricePerOne = 15.60;
        if (count >= 100) {
            discount = 10 * pricePerOne;
        }
        totalSum = (count * pricePerOne) - discount;
        console.log(`Total price: ${totalSum.toFixed(2)}`);
    } else if (type == "Business" && day == "Sunday") {
        let pricePerOne = 16;
        if (count >= 100) {
            discount = 10 * pricePerOne;
        }
        totalSum = (count * pricePerOne) - discount;
        console.log(`Total price: ${totalSum.toFixed(2)}`);
    }
    if (type == "Regular" && day == "Friday") {
        if (count > 10 && count <= 20) {
            discount = 0.05;
        }
        let pricePerOne = 15;
        totalSum = count * pricePerOne;
        let totalSumAfterDicscount = totalSum - (totalSum * discount);
        console.log(`Total price: ${totalSumAfterDicscount.toFixed(2)}`);
    } else if (type == "Regular" && day == "Saturday") {
        if (count > 10 && count <= 20) {
            discount = 0.05;
        }
        let pricePerOne = 20;
        totalSum = count * pricePerOne;
        let totalSumAfterDicscount = totalSum - (totalSum * discount);
        console.log(`Total price: ${totalSumAfterDicscount.toFixed(2)}`);
    } else if (type == "Regular" && day == "Sunday") {
        if (count > 10 && count <= 20) {
            discount = 0.05;
        }
        let pricePerOne = 22.50;
        totalSum = count * pricePerOne;
        let totalSumAfterDicscount = totalSum - (totalSum * discount);
        console.log(`Total price: ${totalSumAfterDicscount.toFixed(2)}`);
    }
}
vacation(30, "Students", "Sunday")