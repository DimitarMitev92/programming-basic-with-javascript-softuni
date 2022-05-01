function footballResults (input){
    let firstMatch = (input[0]);
    let secondMatch = (input[1]);
    let thirdMatch = (input[2]);

    let firstMatch1 = firstMatch[0];
    let firstMatch2 = firstMatch[2];
    let secondMatch1 = secondMatch[0];
    let secondMatch2 = secondMatch[2];
    let thirdMatch1 = thirdMatch[0];
    let thirdMatch2 = thirdMatch[2];

    let counterWin = 0;
    let counterLose = 0;
    let counterEqual = 0;
    if(firstMatch1 > firstMatch2){
        counterWin++;
    }else if(firstMatch1 < firstMatch2){
        counterLose++;
    }else if(firstMatch1 === firstMatch2){
        counterEqual++
    }
    if(secondMatch1 > secondMatch2){
        counterWin++;
    }else if(secondMatch1 < secondMatch2){
        counterLose++;
    }else if(secondMatch1 === secondMatch2){
        counterEqual++
    }
    if(thirdMatch1 > thirdMatch2){
        counterWin++;
    }else if(thirdMatch1 < thirdMatch2){
        counterLose++;
    }else if(thirdMatch1 === thirdMatch2){
        counterEqual++
    }
    console.log(`Team won ${counterWin} games.`);
    console.log(`Team lost ${counterLose} games.`);
    console.log(`Drawn games: ${counterEqual}`);

}
