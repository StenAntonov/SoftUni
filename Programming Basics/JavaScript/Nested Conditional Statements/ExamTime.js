function examTime(input) {
    let examTimeHrs = Number(input.shift());
    let examTimeMins = Number(input.shift());
    let studentTimeHrs = Number(input.shift());
    let studentTimeMins = Number(input.shift());
    let result = 0;
    let exaTotalTimeMins = (examTimeHrs * 60) + examTimeMins;
    let studentTotalTimeMins = (studentTimeHrs * 60) + studentTimeMins;
    let timeDifference = exaTotalTimeMins - studentTotalTimeMins;
    if (timeDifference < 0) {
        result = "Late";
        console.log(result);
        if (timeDifference < 0 && timeDifference >= -9) {
            console.log(`${Math.abs(timeDifference)} minutes after the start`);
        } else if (timeDifference <= -10 && timeDifference >= -59) {
            console.log(`${Math.abs(timeDifference)} minutes after the start`);
        } else if (timeDifference <= -60) {
            if (timeDifference % -60 >= -9) {
                console.log(`${Math.abs(Math.trunc(timeDifference / 60))}:0${Math.abs(timeDifference % 60)} hours after the start`);
            } else {
                (timeDifference % -60 < -9)
                console.log(`${Math.abs(Math.trunc(timeDifference / 60))}:${Math.abs(timeDifference % 60)} hours after the start`);
            }
        }
    } else if (timeDifference >= 0 && timeDifference <= 30) {
        result = "On time";
        console.log(result);
        if (timeDifference > 0 && timeDifference <= 30) {
            console.log(`${timeDifference} minutes before the start`);
        }
    } else if (timeDifference > 30) {
        result = "Early"
        console.log(result);
        if (timeDifference > 0 && timeDifference <= 59) {
            console.log(`${timeDifference} minutes before the start`);
        } else if (timeDifference >= 60) {
            if (timeDifference % 60 <= 9) {
                console.log(`${Math.abs(Math.trunc(timeDifference / 60))}:0${Math.abs(timeDifference % 60)} hours before the start`);
            } else {
                (timeDifference % 60 > 9)
                console.log(`${Math.abs(Math.trunc(timeDifference / 60))}:${Math.abs(timeDifference % 60)} hours before the start`);
            }
        }
    }
}
examTime([14, 00, 13, 55])