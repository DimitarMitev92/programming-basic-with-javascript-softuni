function harvest(input){
    let area = Number(input[0]);
    let grapesPerMeter = Number(input[1]);
    let neededLitersWine = Number(input[2]);
    let workers = Number(input[3])

    let areaForWine = 0.4*area;
    let kgGrapes = areaForWine * grapesPerMeter;
    let wineLiters = kgGrapes/2.5;
    result = Math.abs(wineLiters - neededLitersWine);

    if( neededLitersWine <= wineLiters){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(result)} liters left -> ${Math.ceil(result / workers)} liters per person.`)
    }else{
        console.log(`It will be a tough winter! More ${Math.floor(result)} liters wine needed.`);
    }
}
