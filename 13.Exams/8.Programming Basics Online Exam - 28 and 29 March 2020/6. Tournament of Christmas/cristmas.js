function christmasTournament (input){
    let index = 0;
    let days = Number(input[index]);
    index++;

    let money = 0;
    let allMoney = 0;
    let wonGames = 0;
    let loseGames = 0;
    let daysWin = 0;
    let daysLose = 0;
    
    for(let day = 1; day <= days ; day++){
        money = 0;
        wonGames = 0;
        loseGames = 0;
        let command = input[index];
        index++;

        while(command != "Finish"){
            let game = command;
            let result = (input[index]);
            index++;
            if(result == "win"){
                money +=20;
                wonGames +=1;
            }else if ( result == "lose"){
                loseGames +=1;
            }
            command=input[index];
            index++;
            if(command == "Finish"){
                if(wonGames > loseGames){
                    daysWin +=1;
                    money+= money * 0.1;
                    allMoney+=money;
                }else{
                    daysLose +=1;
                    allMoney+=money
                }
            }
        }
    }
    if(daysWin > daysLose){
        allMoney += allMoney * 0.2;
        console.log(`You won the tournament! Total raised money: ${(allMoney.toFixed(2))}`)
    }else{
        console.log(`You lost the tournament! Total raised money: ${(allMoney.toFixed(2))}`)
    }
}
