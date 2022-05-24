function numberWars (input){
    let index = 0;
    let playerOne = (input[index]);
    index++;
    let playerTwo = (input[index]);
    index++;

    let resultPlayerOne = 0;
    let resultPlayerTwo = 0;

    let command = (input[index]);
    index++;

    while(command != "End of game"){
        let cardPlayerOne = Number(command);
        let cardPlayerTwo = Number(input[index]);
        index++;

        if(cardPlayerOne > cardPlayerTwo){
            resultPlayerOne += (cardPlayerOne - cardPlayerTwo);
        }
        if(cardPlayerTwo > cardPlayerOne){
            resultPlayerTwo += (cardPlayerTwo - cardPlayerOne);
        }
        if(cardPlayerOne === cardPlayerTwo){
            console.log("Number wars!");
            cardPlayerOne = Number(input[index]);
            index++;
            cardPlayerTwo = Number(input[index]);
            index++;
            if(cardPlayerOne > cardPlayerTwo){
                console.log(`${playerOne} is winner with ${resultPlayerOne} points`);
                break;
            }else if( cardPlayerOne < cardPlayerTwo){
                console.log(`${playerTwo} is winner with ${resultPlayerTwo} points`);
                break;
            }
        }
        command = (input[index]);
        index++;
    }
    if(command === "End of game"){
        console.log(`${playerOne} has ${resultPlayerOne} points`);
        console.log(`${playerTwo} has ${resultPlayerTwo} points`);
    }
}
