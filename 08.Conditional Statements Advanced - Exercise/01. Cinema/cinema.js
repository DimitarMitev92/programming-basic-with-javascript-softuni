function cinema(input) {
    let projection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let pricePremiere = 12;
    let priceNormal = 7.5;
    let priceDiscount = 5;

    let result = 0;

    if ( projection === "Premiere"){
        result = r * c * pricePremiere;
        console.log(`${result.toFixed(2)} leva`)
    }else if ( projection === "Normal"){
        result = r * c * priceNormal;
        console.log(`${result.toFixed(2)} leva`)
    }else if ( projection === "Discount"){
        result = r * c * priceDiscount;
        console.log(`${result.toFixed(2)} leva`)
    }
}
