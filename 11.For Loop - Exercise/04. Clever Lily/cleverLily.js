function solve(input){
    let age = Number(input[0]);
    let priceWashingMashine = Number(input[1]);
    let priceOneToy = Number(input[2]);

    let toyCounter = 0;
    let moneySum = 0;
    for(let i = 1; i <= age; i++){
        if(i% 2 === 0){
            moneySum +=(i/2)*10 - 1;
        }else{
            toyCounter++;
        }
    }
    let totalSum = moneySum + toyCounter*priceOneToy;
    if(totalSum >= priceWashingMashine){
        console.log(`Yes! ${(totalSum - priceWashingMashine).toFixed(2)}`)
    }else{
        console.log(`No! ${(priceWashingMashine-totalSum).toFixed(2)}`);
    }
}
