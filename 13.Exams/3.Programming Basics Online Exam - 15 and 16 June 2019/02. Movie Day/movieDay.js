function movieDay (input){
    let timeForMovie = Number(input[0]);
    let numScenes = Number(input[1]);
    let timePerScene = Number(input[2]);

    let timeTeren = 0.15 * timeForMovie;
    let timeScenes = numScenes * timePerScene;
    let total    = timeTeren + timeScenes;

    if(total > timeForMovie){
        console.log(`Time is up! To complete the movie you need ${(total - timeForMovie).toFixed(0)} minutes.`)
    }else{
        console.log(`You managed to finish the movie on time! You have ${(timeForMovie - total).toFixed(0)} minutes left!`)
    }
}
