function easterBakary (input){
    let priceFlourPerKg = Number(input[0]);
    let kgFlour = Number(input[1]);
    let kgSugar = Number(input[2]);
    let packsEggs = Number(input[3]);
    let pakcsMay = Number(input[4]);

    let priceSugarPerKg = priceFlourPerKg * 0.75;
    let priceEggs = priceFlourPerKg * 1.1;
    let priceMay = priceSugarPerKg * 0.2;

    let total = (priceFlourPerKg * kgFlour) + (priceSugarPerKg * kgSugar) + (priceEggs * packsEggs) + (priceMay * pakcsMay);
    console.log(total.toFixed(2))

}
