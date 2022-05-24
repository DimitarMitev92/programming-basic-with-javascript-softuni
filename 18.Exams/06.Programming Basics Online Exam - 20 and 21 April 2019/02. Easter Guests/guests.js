function easterGuests (input){
    let numGuests = Number(input[0]);
    let budget = Number(input[1]);

    let priceEasterBread = 4;
    let priceEgg = 0.45;

    let numEasterBreads = Math.ceil(numGuests / 3);
    let numEggs = numGuests * 2;

    let total = priceEasterBread * numEasterBreads + priceEgg * numEggs;
    let result = Math.abs(budget - total);

    if(budget >= total){
        console.log(`Lyubo bought ${numEasterBreads} Easter bread and ${numEggs} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`)
    }else{
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`)
    }
}
