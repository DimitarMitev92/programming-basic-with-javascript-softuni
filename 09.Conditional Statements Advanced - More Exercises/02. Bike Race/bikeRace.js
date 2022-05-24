function bikeRace (input){
    let numJuniors = Number(input[0]);
    let numSeniors = Number(input[1]);
    let trace = input[2];

    let juniorsTax = 0;
    let seniorsTax = 0;
    let allSum = 0;

    let allNum = numJuniors + numSeniors;

    if(trace === "trail"){
        juniorsTax = 5.5;
        seniorsTax = 7
    }else if ( trace === "cross-country"){
        juniorsTax = 8;
        seniorsTax = 9.5;
    }else if ( trace === "downhill"){
        juniorsTax = 12.25;
        seniorsTax = 13.75;
    }else if ( trace === "road"){
        juniorsTax = 20;
        seniorsTax = 21.50;
    }

    allSum = juniorsTax * numJuniors + seniorsTax * numSeniors;
    allSum = allSum * 0.95;

    if(trace === "cross-country" && allNum >= 50){
        allSum = allSum * 0.75;
    }

    console.log(`${allSum.toFixed(2)}`)
}
