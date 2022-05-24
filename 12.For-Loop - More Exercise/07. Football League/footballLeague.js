function footballTournament (input){
    index=0;
    let capasityStadion = Number(input[index]);
    index++;
    let allFans = Number(input[index]);
    index++;

    let counterA = 0;
    let counterB = 0;
    let counterV = 0;
    let counterG = 0;

    for(let i = index; i <input.length; i++){
        let currentSector = (input[index]);
        index++;

        if(currentSector === "A"){
            counterA++;
        }else if ( currentSector === "B"){
            counterB++;
        }else if (currentSector === "V"){
            counterV++;
        }else if ( currentSector === "G"){
            counterG++;
        }
    }
    let percentA = (counterA / allFans)*100;
    let percentB = (counterB / allFans)*100;
    let percentV= (counterV / allFans)*100;
    let percentG = (counterG / allFans)*100;
    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    console.log(`${((allFans/capasityStadion)*100).toFixed(2)}%`)
}
