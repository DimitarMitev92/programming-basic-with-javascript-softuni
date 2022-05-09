function easterBreads (input){
    let index = 0;
    let numEasterBreads = Number(input[index]);
    index++;
    

    let packSugar = 950;
    let packFlour = 750;

    let sumSugar = 0;
    let sumFlour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;

    for(let i = 1 ; i <= numEasterBreads ; i++){
        let currentSugar = Number(input[index]);
        index++;
        sumSugar+=currentSugar;
        let currenFlour = Number(input[index]);
        index++;
        sumFlour+=currenFlour;
        if(currentSugar > maxSugar){
            maxSugar = currentSugar;
        }
        if(currenFlour > maxFlour){
            maxFlour = currenFlour;
        }
    }
    let allPackSugar = Math.ceil(sumSugar / packSugar);
    let allPackFlour = Math.ceil(sumFlour / packFlour);
    console.log(`Sugar: ${allPackSugar}`);
    console.log(`Flour: ${allPackFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
