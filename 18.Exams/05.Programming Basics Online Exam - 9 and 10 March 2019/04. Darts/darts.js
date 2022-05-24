function darts (input){
    let index = 0;
    let name = (input[index]);
    index++;
    let score = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let command = (input[index]);
    index++;

    while(command != "Retire"){
        let points = Number(input[index]);
        index++;

        if(command === "Single"){
            score -= points;
            if(score >= 0){
                successfulShots++;
            }else{
                unsuccessfulShots++;
                score +=points
            }
        }else if(command === "Double"){
            score -= points*2;
            if(score >= 0){
                successfulShots++;
            }else{
                unsuccessfulShots++;
                score+=points*2;
            }
        }else if(command === "Triple"){
            score -= points*3;
            if(score >= 0){
                successfulShots++;
            }else{
                unsuccessfulShots++;
                score+=points*3
            }
        }
        if(score === 0){
            console.log(`${name} won the leg with ${successfulShots.toFixed(0)} shots.`)
            break;
        }
        command=(input[index]);
        index++;
    }
    if(command === "Retire"){
        console.log(`${name} retired after ${unsuccessfulShots} unsuccessful shots.`)
    }
}
