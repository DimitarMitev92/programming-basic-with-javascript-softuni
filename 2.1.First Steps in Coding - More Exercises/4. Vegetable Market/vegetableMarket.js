function vegieMarket (input){
    const priceFruitsPerKg = Number(input[0]);
    const priceVegiePerKg = Number(input[1]);
    const fruitsKg = Number(input[2]);
    const vegieKg = Number(input[3]);

    const allPrice = (priceFruitsPerKg*fruitsKg + priceVegiePerKg*vegieKg)/1.94;
    console.log(allPrice.toFixed(2));
}
