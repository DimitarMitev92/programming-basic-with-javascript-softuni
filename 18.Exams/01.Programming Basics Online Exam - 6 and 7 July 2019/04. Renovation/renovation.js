function renovation (input){
    let index = 0;
    let height = Number(input[index]); //0
    index++;
    let width = Number(input[index]); //1
    index++;
    let windowsPercent = Number(input[index]); //2
    index++;
    let numWalls = 4;
    let wallsToPaint = Math.ceil((height * width * numWalls)-(height * width * numWalls*(windowsPercent/100)));
    let command = input[index]; //3
    index++;
    let sumPaints = 0;
    let isHaveMoreWalls = true;
    while(command != "Tired!"){
        let currentPaint = Number(command);
        sumPaints+=currentPaint;
        if(wallsToPaint === sumPaints){
            console.log(`All walls are painted! Great job, Pesho!`);
            isHaveMoreWalls=false;
            break;
        }
        if(wallsToPaint < sumPaints){
            console.log(`All walls are painted and you have ${Math.abs(sumPaints - wallsToPaint)} l paint left!`);
            isHaveMoreWalls = false;
            break;
        }
        command = input[index];
        index++;
    }
    if(isHaveMoreWalls){
        console.log(`${(wallsToPaint - sumPaints)} quadratic m left.`);
    }
}
