function fishingBoat (input){
    let budget = Number(input[0]);
    let season = input[1];
    let numFishers = input[2];
    let rent = 0;
    if (season === "Spring"){
        rent = 3000;
    }else if ( season === "Summer" || season === "Autumn"){
        rent = 4200;
    }else if ( season === "Winter"){
        rent = 2600;
    }

    if ( numFishers <= 6){
        rent  *= 0.9;
    }else if ( numFishers > 6 && numFishers <= 11){
        rent *=0.85;
    }else if ( numFishers > 12){
        rent *=0.75;
    }

    if(numFishers % 2 === 0 && season != "Autumn"){
        rent *=0.95;
    }


    if(budget >= rent){
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
    }
}
