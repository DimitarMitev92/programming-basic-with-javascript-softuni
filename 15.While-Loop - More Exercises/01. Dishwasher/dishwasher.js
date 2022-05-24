function dishwasher(input) {
    let index = 0;
    let preparation = Number(input[index]);
    index++;
    let preparationAll = preparation * 750;
    let command = input[index];
    index++;
    let counterWashingTimes = 0
    let counterPlates = 0;
    let counterPots = 0;
    let neededPreparationForPlates = 0;
    let neededPreparationForPots = 0;
    let platesNum = 0;
    let potsNum = 0;
    

    while (command !== "End") {
        counterWashingTimes++;
        
        if(counterWashingTimes % 3 === 0){
            counterPots=Number(command);
            neededPreparationForPots += counterPots*15;
            potsNum+=Number(command)

        }else{
            counterPlates=Number(command);
            neededPreparationForPlates +=counterPlates*5;
            platesNum+=Number(command);
        }
        let sum = preparationAll - (neededPreparationForPlates+neededPreparationForPots);
        if(sum < 0){
            console.log(`Not enough detergent, ${Math.abs(sum)} ml. more necessary!`)
            break;
        }
        command = input[index];
        index++;

    }
    let sum = preparationAll - (neededPreparationForPlates+neededPreparationForPots);
    if (command === "End"){
        console.log(`Detergent was enough!`);
        console.log(`${platesNum} dishes and ${potsNum} pots were washed.`)
        console.log(`Leftover detergent ${sum} ml.`)
    }       
}
