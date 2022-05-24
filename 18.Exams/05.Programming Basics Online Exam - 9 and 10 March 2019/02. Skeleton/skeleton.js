function skeleton (input){
    let minutesControl = Number(input[0]);
    let secondsControl = Number(input[1]);
    let longDistance = Number(input[2]);
    let secondsPer100Meters = Number(input[3]);

    let secondsAllTime = minutesControl*60 + secondsControl;
    let minusTime = longDistance / 120;
    let totalminusTime = minusTime * 2.5;
    let marinTime = (longDistance / 100)*secondsPer100Meters - totalminusTime;
    if(marinTime <= secondsAllTime){
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinTime.toFixed(3)}.`)
    }else{
        console.log(`No, Marin failed! He was ${Math.abs(secondsAllTime - marinTime).toFixed(3)} second slower.`)
    }
}
