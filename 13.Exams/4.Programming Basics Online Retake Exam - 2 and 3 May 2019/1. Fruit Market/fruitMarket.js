function fruitShop(input){
    let priceBerriesBGN = Number(input[0]);
    let banansaKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let berriesKg = Number(input[4]);

    let priceRaspberries = 0.5 * priceBerriesBGN;
    let priceOranges = 0.6 * priceRaspberries;
    let priceBananas = 0.2 * priceRaspberries;

    let totalSum = (priceBerriesBGN * berriesKg) + ( banansaKg * priceBananas) + (orangesKg * priceOranges) + (priceRaspberries * raspberriesKg);
    console.log(totalSum.toFixed(2));
}
