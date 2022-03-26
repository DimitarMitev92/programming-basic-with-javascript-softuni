function depositCalculator(input){
    const depositSum = Number(input[0]);
    const valueOfDeposit = Number(input[1]);
    const yearPercent = Number(input[2]) / 100;

    let lihva = depositSum * yearPercent;
    let lihvaZa1Mesec = lihva / 12;
    let TotalSum = depositSum + valueOfDeposit*lihvaZa1Mesec;
    console.log(TotalSum.toFixed(2));
}
