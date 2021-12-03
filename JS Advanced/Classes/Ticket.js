function solve(arr, string) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = Number(price),
            this.status = status;
        }
    }

    for ( let line of arr ) {
        let [destination, price, status] = line.split('|');
        tickets.push(new Ticket(destination, price, status));
    }

    if(string == 'destination'){
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    }else if (string == 'price') {
        tickets.sort((a, b) => a.price - b.price);
    }else if (string == 'status') {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    return tickets;
};
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'

));