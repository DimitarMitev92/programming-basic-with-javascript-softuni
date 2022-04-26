function movieProfit(input){
    let nameMovie = (input[0]);
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentCinema = Number(input[4]);

    let priceTickets = tickets * priceTicket;
    let profitAllPeriod = days * priceTickets;
    let percentForCinema = (profitAllPeriod*percentCinema)/100;
    let total = profitAllPeriod - percentForCinema;
    console.log(`The profit from the movie ${nameMovie} is ${total.toFixed(2)} lv.`)
}
