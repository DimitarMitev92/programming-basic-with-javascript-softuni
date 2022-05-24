function catWalking(input){
    let minutesWalkingPerDay = Number(input[0]);
    let numWalkingsPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let allMinutes = minutesWalkingPerDay * numWalkingsPerDay;
    let allBurnCalories = allMinutes*5;
    let neededCatCalories = caloriesPerDay / 2;

    if(allBurnCalories >= neededCatCalories ){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${allBurnCalories}.`)
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${allBurnCalories}.`)
    }
}
