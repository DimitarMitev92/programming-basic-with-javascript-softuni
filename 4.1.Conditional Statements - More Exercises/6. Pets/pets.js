function marinasPets (input){
    let days = Number(input[0]);
    let kgFood = Number(input[1]);
    let dogFoodPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let turtleFoodPerDayKg = Number(input[4]);

    let dogFood = days * dogFoodPerDayKg;
    let catFood = days * catFoodPerDayKg;
    let turtleFood = days * turtleFoodPerDayKg/1000;
    let allFood = dogFood + catFood + turtleFood;

    if(kgFood >= allFood){
        console.log(`${Math.floor(kgFood - allFood)} kilos of food left.`)
    }else{
        console.log(`${Math.ceil(allFood - kgFood)} more kilos of food are needed.`);
    }
}
