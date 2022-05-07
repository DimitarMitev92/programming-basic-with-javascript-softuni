function eggBattle (input){
    let index = 0;
    let firstPlayer = Number(input[0]);
    index++;
    let secondPlayer = Number(input[1]);
    index++;
    let command = (input[2]);
    index++;

    let counterFirst = firstPlayer;
    let counterSecond = secondPlayer;

    while(command !== "End of battle"){
        switch(command){
            case "one": counterSecond--; break;
            case "two": counterFirst--; break;
        }
        if(counterFirst === 0){
            console.log(`Player one is out of eggs. Player two has ${counterSecond} eggs left.`)
            break;
        }else if ( counterSecond === 0){
            console.log(`Player two is out of eggs. Player one has ${counterFirst} eggs left.`)
            break;
        }
        command=input[index];
        index++;
    }
    if(command === "End of battle"){
        console.log(`Player one has ${counterFirst} eggs left.`);
        console.log(`Player two has ${counterSecond} eggs left.`)
    }
}
