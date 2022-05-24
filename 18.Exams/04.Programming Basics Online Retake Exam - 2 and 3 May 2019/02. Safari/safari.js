function safari (input){
    let budget = Number(input[0]);
    let liters = Number(input[1]);
    let day = (input[2]);

    let pricePerLiter = 2.10;
    let priceCicerone = 100;
    let discount = 0;

    if(day === "Saturday"){
        discount = 0.9;
    }else if (day === "Sunday"){
        discount = 0.8;
    } 
    let total = (pricePerLiter * liters + priceCicerone)*discount;
    if(total > budget){
        console.log(`Not enough money! Money needed: ${(total - budget).toFixed(2)} lv.`)
    }else{
        console.log(`Safari time! Money left: ${(budget - total).toFixed(2)} lv.`)
    }  
}
