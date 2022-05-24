function poolDay(input){
    let numPeople = Number(input[0]);
    let entryTaxs = Number(input[1]);
    let priceDeckChair = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let allEntryTaxs = numPeople * entryTaxs;
    let allDeckChair = (Math.ceil(0.75 * numPeople)) * priceDeckChair;
    let allUmbrella = Math.ceil(numPeople/2) * priceUmbrella;
    let total = allEntryTaxs + allDeckChair + allUmbrella;
    console.log(`${total.toFixed(2)} lv.`)
}
