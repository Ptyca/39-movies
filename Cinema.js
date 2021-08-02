class Cinema {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.list = [];
        this.ticketsCount = 0;
    }
    intro() {
        console.log(`Welcome to "${this.name}" cinema theater!`);
    }
    addMovie(movieName, moviePrice, ticketPrice) {
        this.list.push({
            movieName,
            moviePrice,
            ticketPrice,
            movieIndex: movieIndex,
            ticketsCount: 0,
        });
        console.log(`You can watch "${movieName} " movie for ${ticketPrice} ${this.currency}, now!`)
    }

    sellTickets(movieIndex, ticketsCount) {
        let ticketsCount = 0;
        for (let i = 0; i < this.list.length; i++) {
            movieIndex = this.list[i];
        }
        console.log(this.list)
    }
}

module.exports = Cinema;