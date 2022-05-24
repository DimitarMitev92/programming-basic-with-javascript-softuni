function careOfPuppy(input){
    index=0;
    let kgFoodHave = Number(input[index]);
    index++;
    let command = (input[index]);
    index++;

    let foodHaveInGrams = kgFoodHave*1000;
    let foodEatenFromDog = 0;

    while(command !== "Adopted"){
        let currentFood = Number(command);
        foodEatenFromDog+=currentFood;
        
        command=(input[index]);
        index++;
    }
    if(foodEatenFromDog > foodHaveInGrams){
        console.log(`Food is not enough. You need ${foodEatenFromDog - foodHaveInGrams} grams more.`);
    }else{
        if(foodEatenFromDog === foodHaveInGrams){
            console.log(`Food is enough! Leftovers: 0 grams.`)
        }else{
        console.log(`Food is enough! Leftovers: ${foodHaveInGrams - foodEatenFromDog} grams.`)
        }
    }
}
