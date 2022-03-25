function greeningYard (input){
    const squareMeters = Number(input[0]);
    let result = squareMeters* 7.61;
    let finalPrice = result - result*0.18;
    let discount = result * 0.18;
    console.log(`The final price is: ${(finalPrice)} lv.`);
    console.log(`The discount is: ${(discount)} lv.`)
}
