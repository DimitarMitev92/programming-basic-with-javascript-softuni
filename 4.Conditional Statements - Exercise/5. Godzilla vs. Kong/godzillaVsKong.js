function godzillaVsKong(input) {
    let budgetMovie = Number(input[0]);
    let numPeople = Number(input[1]);
    let sumSuitsPer1Human = Number(input[2]);
    
    let decor = 0.10 * budgetMovie;
    let sumAllSuits = numPeople * sumSuitsPer1Human;

    if(numPeople > 150){
        sumAllSuits = sumAllSuits*0.9;
    }
    let allSum = decor + sumAllSuits;

    if(budgetMovie >= allSum){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budgetMovie - allSum).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(allSum - budgetMovie).toFixed(2)} leva more.`)
    }
    
}
