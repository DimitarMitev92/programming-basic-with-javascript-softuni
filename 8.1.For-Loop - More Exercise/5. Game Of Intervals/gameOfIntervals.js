function gameOfIntervals (input){
    index= 0;
    let allNumbers = Number(input[index]);
    index++;

    let totalSum = 0;
    let counter0To9 = 0;
    let counter10To19 = 0;
    let counter20To29 = 0;
    let counter30To39 = 0;
    let counter40To50 = 0;
    let counterInvalid = 0;

    for( let i = 0; i < allNumbers; i++){
        let currentNumber = Number(input[index])
        index++;

        if(currentNumber >= 0 && currentNumber <= 9){
            counter0To9++;
            totalSum+= currentNumber*0.2;
        }else if ( currentNumber >=10 && currentNumber <= 19){
            counter10To19++;
            totalSum += currentNumber*0.3;
        }else if ( currentNumber >= 20 && currentNumber <=29){
            counter20To29++;
            totalSum += currentNumber*0.4;
        }else if ( currentNumber >= 30 && currentNumber <= 39){
            counter30To39++;
            totalSum +=50;
        }else if ( currentNumber >= 40 && currentNumber <= 50){
            counter40To50++;
            totalSum+=100;
        }else{
            counterInvalid++;
            totalSum=totalSum/2;
        }
    }
    let nums0To9 = (counter0To9 / allNumbers)*100;
    let nums10To19 = (counter10To19/ allNumbers)* 100;
    let nums20To29 = (counter20To29/allNumbers)*100;
    let nums30To39 = (counter30To39 / allNumbers)* 100;
    let nums40To50 = (counter40To50/allNumbers)*100;
    let numsInvalid = (counterInvalid / allNumbers)* 100;

    console.log(`${totalSum.toFixed(2)}`);
    console.log(`From 0 to 9: ${nums0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${nums10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${nums20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${nums30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${nums40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${numsInvalid.toFixed(2)}%`);
}
