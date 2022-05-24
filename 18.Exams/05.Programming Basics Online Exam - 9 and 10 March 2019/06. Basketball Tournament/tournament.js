function basketBallTournament (input){
    let index = 0;
    let command = (input[index]);
    index++
    let counterWin = 0;
    let counterLose = 0;
    let totalMatches = 0;

    while(command != "End of tournaments"){
        let numberOfGames = Number(input[index]);
        index++;
        totalMatches += numberOfGames;

        for(let game = 1; game <= numberOfGames; game++){
            let homePoints = Number(input[index]);
            index++;
            let awayPoints = Number(input[index]);
            index++;
            let home = Math.abs(homePoints - awayPoints);
            let away = Math.abs(homePoints - awayPoints);

            if(homePoints > awayPoints){
                console.log(`Game ${game} of tournament ${command}: win with ${home} points.`)
                counterWin++;
            }else if( homePoints < awayPoints){
                console.log(`Game ${game} of tournament ${command}: lost with ${away} points.`);
                counterLose++;
            }
        }
        command=(input[index]);
        index++;
    }
    let percentageOfWins = (counterWin / totalMatches)*100;
    let percentageOfLosts = (counterLose / totalMatches)* 100;
    console.log(`${percentageOfWins.toFixed(2)}% matches win`);
    console.log(`${percentageOfLosts.toFixed(2)}% matches lost`)
}
