function club(input){
    let index=0;
    let neededPrice = Number(input[index]);
    index++;
    let command = (input[index]);
    index++;
    let priceCurrentDrink = 0;
    let sumCurrentDrink = 0;
    let totalSum = 0;
    let isHaveMoney = false;
    while(command != "Party!"){
        let currentDrink = command;
        let currentNumDrinks = Number(input[index]);
        index++;
        priceCurrentDrink=currentDrink.length;
        sumCurrentDrink = priceCurrentDrink * currentNumDrinks;
        if(sumCurrentDrink % 2 != 0){
            totalSum+=sumCurrentDrink*0.75;
        }else{
            totalSum+=sumCurrentDrink;
        }
        if(neededPrice <= totalSum){
            console.log(`Target acquired.`);
            console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
            isHaveMoney=true;
            break;
        }
        command=(input[index]);
        index++
    }
    if(!isHaveMoney){
        console.log(`We need ${(neededPrice-totalSum).toFixed(2)} leva more.`)
        console.log(`Club income - ${totalSum.toFixed(2)} leva.`);

    }
}
