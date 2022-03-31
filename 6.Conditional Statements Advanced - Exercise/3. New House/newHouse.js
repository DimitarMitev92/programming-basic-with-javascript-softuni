function newHouse (input){
    let flower = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let rosesPrice = 5;
    let dahliasPrice = 3.8;
    let tulipsPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;

    let sum = 0;

    if( flower === "Roses"){
        if (numFlowers > 80){
            sum = numFlowers * rosesPrice * 0.9
        }else{
            sum = numFlowers * rosesPrice;
        }
    }else if (flower === "Dahlias"){
        if (numFlowers > 90){
            sum = numFlowers * dahliasPrice * 0.85
        }else{
            sum = numFlowers * dahliasPrice;
        }
    }else if ( flower === "Tulips"){
        if (numFlowers > 80){
            sum = numFlowers * tulipsPrice * 0.85
        }else{
            sum = numFlowers * tulipsPrice;
        }
    }else if ( flower === "Narcissus"){
        if (numFlowers < 120){
            sum = numFlowers * narcissusPrice * 1.15;
        }else{
            sum = numFlowers * narcissusPrice;
        }
    }else if ( flower === "Gladiolus"){
        if (numFlowers < 80){
            sum = numFlowers * gladiolusPrice * 1.2;
        }else{
            sum = numFlowers * gladiolusPrice;
        }
    }
    
    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${numFlowers} ${flower} and ${(budget - sum).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
    }
}
