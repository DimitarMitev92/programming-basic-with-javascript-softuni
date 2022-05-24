function fuelTank (input){
    let fuel = (input[0]);
    let liters = Number(input[1]);

    if(fuel === "Diesel"){
        if(liters >= 25){
            console.log(`You have enough ${fuel.toLowerCase()}.`)
        }else{
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`)
        }
    }else if (fuel === "Gasoline"){
        if(liters >= 25){
            console.log(`You have enough ${fuel.toLowerCase()}.`)
        }else{
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`)
        }
    }else if (fuel === "Gas"){
        if(liters >= 25){
            console.log(`You have enough ${fuel.toLowerCase()}.`)
        }else{
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`)
        
        }
    }else{
        console.log(`Invalid fuel!`);
    }
}
