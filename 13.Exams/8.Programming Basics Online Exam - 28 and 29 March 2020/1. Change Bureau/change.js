function change (input){
    let numBitcoins = Number(input[0]);
    let numChinesYuans = Number(input[1]);
    let commision = Number(input[2]);

    let oneBitPerBGN = 1168; // bgn
    let chinesYanusPerUSD = 0.15 // usd
    let usdToBgn = 1.76 // bgn
    let euroPerBgn = 1.95;
    let commisionPer = (100 - commision)/100

    let allBit = numBitcoins * oneBitPerBGN;
    let allYans = numChinesYuans * chinesYanusPerUSD * usdToBgn;
    let sumAll = allBit+ allYans;
    let sumInUsr = sumAll / euroPerBgn;
    let totalPrice = (sumInUsr*commisionPer);
    console.log(totalPrice.toFixed(2));
}
