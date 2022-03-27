function worldSwimmingRecord (input){
    let recordInSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeSecPer1Meter = Number(input[2]);

    swim = meters * timeSecPer1Meter;
    bonus15m = meters / 15;
    secBonus = Math.floor(bonus15m) * 12.5;
    totalTime = swim + secBonus;

    result = totalTime - recordInSec;

    if( totalTime >= recordInSec){
        console.log(`No, he failed! He was ${(result).toFixed(2)} seconds slower.`);
    }else if (totalTime < recordInSec){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
