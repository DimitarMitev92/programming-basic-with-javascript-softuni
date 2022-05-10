function agencyProfit(input){
    let nameAgency = input[0];
    let numOldTickets = Number(input[1]);
    let numKidsTickets = Number(input[2]);
    let priceTicketOld = Number(input[3]);
    let priceTax = Number(input[4]);

    let priceTicketKids = priceTicketOld * 0.3;
    let allPriceOld = priceTicketOld + priceTax;
    let allPriceKid = priceTicketKids + priceTax;
    let totalSum = ( numKidsTickets * allPriceKid) + (numOldTickets * allPriceOld);
    let profit = totalSum*0.2;

    console.log(`The profit of your agency from ${nameAgency} tickets is ${profit.toFixed(2)} lv.`)
}
