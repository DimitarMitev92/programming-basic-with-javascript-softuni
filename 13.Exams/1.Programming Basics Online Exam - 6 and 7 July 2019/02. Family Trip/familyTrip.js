function familyTrip(input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceForNight = Number(input[2]);
    let percent = Number(input[3]);

    if(nights > 7){
        priceForNight*=0.95;
    }
    let priceNights = nights * priceForNight;
    let pricePercent = (percent/100)* budget;
    let totalSum = priceNights + pricePercent;
    if(budget >= totalSum){
        console.log(`Ivanovi will be left with ${(budget - totalSum).toFixed(2)} leva after vacation.`)
    }else{
        console.log(`${(totalSum - budget).toFixed(2)} leva needed.`)
    }
}
