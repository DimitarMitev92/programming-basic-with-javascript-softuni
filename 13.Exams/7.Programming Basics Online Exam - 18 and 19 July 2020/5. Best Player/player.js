function bestPlayer(input){
    let index = 0;
    let command = input[index];
    index++;
    let maxScore = 0;
    let namePlayer = "";

    while(command !== "END"){
        let currentPlayer = command;
        let currentGoal = Number(input[index]);
        if(currentGoal > maxScore){
            maxScore = currentGoal;
            namePlayer = currentPlayer;
        }
        if(maxScore >= 10){
            break;
        }
        command=input[index];
        index++
    }
    console.log(`${namePlayer} is the best player!`);
    if(maxScore >= 3){
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${maxScore} goals.`)
    }
}
