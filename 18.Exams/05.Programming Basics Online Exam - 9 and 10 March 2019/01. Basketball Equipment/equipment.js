function basketballEquipment (input){
    let yearTacksForTrainings = Number(input[0]);

    let priceBasketballSneakers = yearTacksForTrainings*0.6;
    let pricebasketballSuit = priceBasketballSneakers*0.8;
    let priceBall = (1/4) * pricebasketballSuit;
    let priceBasketballАccessory = (1/5) * priceBall;
    let totalSum =yearTacksForTrainings+ priceBasketballSneakers+pricebasketballSuit + priceBall + priceBasketballАccessory;
    console.log(totalSum.toFixed(2));
}
