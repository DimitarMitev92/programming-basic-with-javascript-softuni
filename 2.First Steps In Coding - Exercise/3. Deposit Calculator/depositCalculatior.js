function depositCalculator(input){
    const depositSum = Number(input[0]);
    const valueOfDeposit = Number(input[1]);
    const yearPercent = Number(input[2]) / 100;

    let interest = depositSum * yearPercent;
    let interestPerMonth = interest / 12;
    let totalSum = depositSum + valueOfDeposit*interestPerMonth;
    console.log(totalSum.toFixed(2));
}
