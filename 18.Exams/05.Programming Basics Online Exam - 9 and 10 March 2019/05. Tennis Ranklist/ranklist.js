function tennisRanklist(input) {
    let index = 0;
    let tournamentsNumber = Number(input[index]);
    index++;
    let allPoints = Number(input[index]);
    index++;
    let currentPoints = 0;
    let points = 0;
    let winnerCounter = 0;
    let stageInTournament = input[index];
    index++
 
    for (let i = 1; i <= tournamentsNumber; i++) {  
        if (stageInTournament == 'W') {
            points = 2000;
            winnerCounter++;
        } else if (stageInTournament == 'F') {
            points = 1200;
        } else if (stageInTournament == 'SF') {
            points = 720;
        }
        allPoints += points;
        currentPoints += points;
        stageInTournament = input[index];
        index++
    }
    let averagePoints = currentPoints / tournamentsNumber;
    let winnerPercent = winnerCounter / tournamentsNumber * 100;
    console.log(`Final points: ${allPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winnerPercent.toFixed(2)}%`);
}
