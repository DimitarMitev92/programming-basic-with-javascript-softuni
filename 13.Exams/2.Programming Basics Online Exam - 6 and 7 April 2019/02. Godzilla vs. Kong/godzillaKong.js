function GodzillaVsKong (input){
    let budget = Number(input[0]);
    let numPeople = Number(input[1]);
    let priceSuit = Number(input[2]);

    let decoration = 0.1 * budget;
    let suitsPrice = numPeople * priceSuit;

    if(numPeople > 150){
        suitsPrice = suitsPrice*0.9;
    }
    let totalSum = decoration + suitsPrice;

    if(budget >= totalSum){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum-budget).toFixed(2)} leva more.`)
    }
}
