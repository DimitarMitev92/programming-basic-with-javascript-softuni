function fishLand(input){
    const priceMackerelPerKg = Number(input[0]); 
    const priceSpratPerKg = Number(input[1]);   
    const kgBonito = Number(input[2]);         
    const kgScad = Number(input[3]);          
    const kgMussels = Number(input[4]);      

    let priceBonito = priceMackerelPerKg*1.6;
    let sumBonito = priceBonito * kgBonito;
    let priceScad = priceSpratPerKg*1.8;
    let sumScad = priceScad * kgScad;
    let sumMussels = 7.5 * kgMussels;
    let totalSum = sumBonito + sumScad + sumMussels;
    console.log(totalSum.toFixed(2));
}
