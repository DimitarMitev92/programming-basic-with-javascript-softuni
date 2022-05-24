function coffeeMachine(input){
    let drink = (input[0]);
    let sugar = (input[1]);
    let numDrinks = Number(input[2]);
    let price = 0;
    if(drink === "Espresso"){
        if(sugar === "Without"){
            price = 0.9;
        }else if ( sugar === "Normal"){
            price = 1
        }else if ( sugar === "Extra"){
            price = 1.2;
        }
    }else if ( drink === "Cappuccino"){
        if(sugar === "Without"){
            price = 1;
        }else if ( sugar === "Normal"){
            price = 1.2;
        }else if ( sugar === "Extra"){
            price = 1.6;
        }
    }else if ( drink === "Tea"){
        if(sugar === "Without"){
            price = 0.5;
        }else if ( sugar === "Normal"){
            price = 0.6;
        }else if ( sugar === "Extra"){
            price = 0.7;
        }
    }

    let totalSum = price*numDrinks;
    if(sugar === "Without"){
        totalSum= totalSum*0.65;
    }
    if(drink === "Espresso" && numDrinks >= 5){
        totalSum = totalSum * 0.75;
    }
    if(totalSum > 15){
        totalSum= totalSum*0.8;
    }
    console.log(`You bought ${numDrinks} cups of ${drink} for ${totalSum.toFixed(2)} lv.`)
}
