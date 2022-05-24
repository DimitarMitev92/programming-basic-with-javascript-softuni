function firm (input){
    let neededHours = Number(input[0]);
    let day = Number(input[1]);
    let workers = Number(input[2]);

    let hoursWork = day * (1 - 0.1) * 8;
    let workAfterEnd = workers * (2 * day);
    let allHours = Math.floor(hoursWork + workAfterEnd);
    if ( allHours >= neededHours){
        console.log(`Yes!${(allHours - neededHours)} hours left.`)
    }else{
        console.log(`Not enough time!${neededHours - allHours} hours needed.`)
    }
}
