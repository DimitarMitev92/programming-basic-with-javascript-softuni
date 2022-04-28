function oscars(input){
    let index = 0;
    let nameNominatedActor = (input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let numJury = Number(input[index]);
    index++;
    let sumPoints = startPoints;
    let maxPoints = 1250.5;
    let isNominee = false;
    for(let i = 0; i < numJury; i++){
        let currentJury = input[index];
        let lengthCurrentJuryName = Number(currentJury.length)
        index++;
        let currentPoints = Number(input[index]);
        sumPoints+=((lengthCurrentJuryName*currentPoints)/2);
        if(sumPoints >= maxPoints){
            console.log(`Congratulations, ${nameNominatedActor} got a nominee for leading role with ${(sumPoints.toFixed(1))}!`)
            isNominee = true;
            break;
        }
        index++;
        
    }
    if(!isNominee){
        console.log(`Sorry, ${nameNominatedActor} you need ${(maxPoints - sumPoints).toFixed(1)} more!`)
    }
}
