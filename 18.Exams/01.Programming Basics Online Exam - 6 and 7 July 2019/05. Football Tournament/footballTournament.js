function footballTournament(input){
    let name = input[0];
    let numberGames = Number(input[1]);

    let w = 0;
    let d = 0;
    let l = 0;
    let points = 0;
    for(let i = 2 ; i <= numberGames +1 ; i++){
        let result = input[i];
        if(result === "W"){
            w++;
            points = points + 3;
        }else if ( result === "D"){
            d++;
            points = points + 1;
        }else if ( result === "L"){
            l++;
        }
    }
    let percentWinGames = (w/numberGames)*100;
    if(numberGames === 0){
        console.log(`${name} hasn't played any games during this season.`)
    }else{
        console.log(`${name} has won ${points} points during this season.`)
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${percentWinGames.toFixed(2)}%`)
    }
}
