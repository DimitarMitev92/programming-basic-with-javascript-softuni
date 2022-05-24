function easterEggs (input){
    let numEggs = Number(input[0]);

    let counterRed = 0;
    let counterOrange = 0;
    let counterBlue = 0;
    let counterGreen = 0;


    for(let i = 1; i <= numEggs; i++){
        let color = (input[i]);
        if(color === "red"){
            counterRed++;
        }else if (color === "orange"){
            counterOrange++;
        }else if (color === "blue"){
            counterBlue++;
        }else if (color === "green"){
            counterGreen++;
        }
    }
    console.log(`Red eggs: ${counterRed}`);
    console.log(`Orange eggs: ${counterOrange}`);
    console.log(`Blue eggs: ${counterBlue}`);
    console.log(`Green eggs: ${counterGreen}`);
    let maxColor = 0;
    let maxCounter = 0;
    if(counterRed > counterBlue && counterRed > counterGreen && counterRed >counterOrange){
        maxColor = "red";
        maxCounter = counterRed
    }else if ( counterOrange > counterRed && counterOrange > counterBlue && counterOrange > counterGreen){
        maxColor = "orange";
        maxCounter = counterOrange
    }else if ( counterBlue > counterRed && counterBlue > counterOrange && counterBlue > counterGreen){
        maxColor = "blue";
        maxCounter = counterBlue;
    }else if ( counterGreen > counterRed && counterGreen > counterBlue && counterGreen > counterOrange){
        maxColor = "green";
        maxCounter = counterGreen;
    }
    console.log(`Max eggs: ${maxCounter} -> ${maxColor}`);
}
