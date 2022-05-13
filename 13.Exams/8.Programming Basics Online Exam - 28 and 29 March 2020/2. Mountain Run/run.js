function mountainRun(input){
    let recordSec = Number(input[0]);
    let traceInMeters = Number(input[1]);
    let secForOneMeter = Number(input[2]);

    let runnerTime = traceInMeters * secForOneMeter ;
    let bonusMeters = Math.floor(traceInMeters / 50);
    let bonusTime = 30 *bonusMeters;
    let allTime = runnerTime + bonusTime;

    if( recordSec > allTime){
        console.log(`Yes! The new record is ${allTime.toFixed(2)} seconds.`)
    }else{
        console.log(`No! He was ${(allTime - recordSec).toFixed(2)} seconds slower.`)
    }
}
