function addBags(input){
    let priceForBagOver20Kg = Number(input[0]);
    let kgBags = Number(input[1]);
    let daysTraveling = Number(input[2]);
    let numBags = Number(input[3]);

    

    if( kgBags < 10){
        priceForBagOver20Kg = priceForBagOver20Kg * 0.2;
    }else if ( kgBags >=10 && kgBags <= 20){
        priceForBagOver20Kg = priceForBagOver20Kg * 0.5;
    }else{
        priceForBagOver20Kg = priceForBagOver20Kg;
    }

    if(daysTraveling > 30){
        priceForBagOver20Kg = priceForBagOver20Kg + 0.1*priceForBagOver20Kg;
    }else if ( daysTraveling <= 30 && daysTraveling >= 7){
        priceForBagOver20Kg = priceForBagOver20Kg + 0.15*priceForBagOver20Kg;
    }else {
        priceForBagOver20Kg = priceForBagOver20Kg + priceForBagOver20Kg*0.4;
    }
    let totalSum = priceForBagOver20Kg * numBags;
    console.log(`The total price of bags is: ${totalSum.toFixed(2)} lv.`);
}
