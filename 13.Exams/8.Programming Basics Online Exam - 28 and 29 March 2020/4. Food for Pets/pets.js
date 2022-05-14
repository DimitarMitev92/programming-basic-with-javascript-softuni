function foodForPets(input){
    index=0;
    let days = Number(input[index]);
    index++;
    let allFood = Number(input[index]);
    index++;
    let counterDays = 0;
    let foodEatenDog = 0;
    let foodEatenCat = 0;
    let foodBiscuits = 0;
    for(let i = 0; i <days; i++){
        let currentFoodDog = Number(input[index]);
        index++;
        let currentFoodCat = Number(input[index]);
        index++;
        counterDays++;
        foodEatenDog+=currentFoodDog;
        foodEatenCat+=currentFoodCat;
        if(counterDays % 3 === 0){
            foodBiscuits+=(currentFoodCat+currentFoodDog)*0.1;
        }
    }
    console.log(`Total eaten biscuits: ${(foodBiscuits).toFixed(0)}gr.`);
    let allEatenFoodPercent = ((foodEatenCat+foodEatenDog)/allFood)*100;
    console.log(`${allEatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    let dogEatenFood = (foodEatenDog/(foodEatenCat+foodEatenDog))*100;
    let carEatenFood = (foodEatenCat/(foodEatenCat + foodEatenDog))*100;
    console.log(`${dogEatenFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${carEatenFood.toFixed(2)}% eaten from the cat.`);
}
