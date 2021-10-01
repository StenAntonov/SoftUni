function solve(dayAsString) {
    let days = {
         'Monday': 1,
         'Tuesday': 2,
         'Wednesday': 3,
         'Thirsday': 4,
         'Friday': 5,
         'Saturday': 6,
         'Sunday': 7
    }

    if(!days[dayAsString]){
        console.log('error');
    }else{
        console.log(days[dayAsString]);
    }
}
solve("Monday");