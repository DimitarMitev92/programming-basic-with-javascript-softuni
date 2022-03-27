function toyMarket (input){
    let puzzlePrice = 2.6;
    let dollsPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;

    let vacationPrice = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let numDolls = Number(input[2]);
    let numBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let totalSum = puzzlePrice * numPuzzles + dollsPrice * numDolls + bearPrice*numBears + minionPrice * numMinions +truckPrice*numTrucks;
    let counterToys = numPuzzles + numDolls + numBears + numMinions + numTrucks;

    if(counterToys >= 50){
        totalSum = totalSum*0.75;
    }
    let rent = totalSum*0.1;

    let finalSum = totalSum - rent;

    if(finalSum >= vacationPrice){
        console.log(`Yes! ${(finalSum - vacationPrice).toFixed(2)} lv left.`)
    }else {
        console.log(`Not enough money! ${(vacationPrice - finalSum).toFixed(2)} lv needed.`);
    }
}
