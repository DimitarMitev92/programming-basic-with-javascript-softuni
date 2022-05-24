function movieDestination (input){
    let budget = Number(input[0]);
    let destination = (input[1]);
    let season = (input[2]);
    let days = Number(input[3]);

    let price = 0;

    if(destination === "Dubai"){
        if(season === "Winter"){
            price = 45000;
        }else{
            price = 40000;
        }
    }else if(destination === "Sofia"){
        if(season === "Winter"){
            price = 17000;
        }else if(season === "Summer"){
            price = 12500;
        }
    }else if(destination === "London"){
        if(season === "Winter"){
            price = 24000;
        }else if(season === "Summer"){
            price = 20250;
        }
    }
    if(destination === "Dubai"){
        price*=0.7;
    }else if(destination === "Sofia"){
        price*=1.25;
    }
    let total = price * days;
    if(total > budget){
        console.log(`The director needs ${(total-budget).toFixed(2)} leva more!`)
    }else{
        console.log(`The budget for the movie is enough! We have ${(budget - total).toFixed(2)} leva left!`)
    }
}
