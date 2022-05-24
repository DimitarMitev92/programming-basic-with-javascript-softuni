function lunchBreak (input){
    let name = (input[0]);
    let serialTime = Number(input[1]);
    let restTime = Number(input[2]);

    let timeLunch = (1/8)*restTime;
    let timeRelax = (1/4)* restTime;

    let allTime = restTime - timeLunch - timeRelax;
    result = Math.abs(allTime - serialTime);

    if(serialTime <= allTime){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(result)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(result)} more minutes.`)
    }
}
