function flowerMarket (input){
    let magnoliaPrice = 3.25;
    let hyacinthPrice = 4;
    let rosePrice = 3.5;
    let cactusPrice = 8;

    let numMagnolia = Number(input[0]);
    let numHyacinth = Number(input[1]);
    let numRose = Number(input[2]);
    let numCactus = Number(input[3]);
    let pricePresent = Number(input[4]);

    let allMoney = 0.95 * (magnoliaPrice* numMagnolia + hyacinthPrice*numHyacinth + rosePrice*numRose + cactusPrice*numCactus);

    if(pricePresent <= allMoney){
        console.log(`She is left with ${Math.floor(allMoney - pricePresent)} leva.`);
    }else {
        console.log(`She will have to borrow ${Math.ceil(pricePresent - allMoney)} leva.`)
    }
}
