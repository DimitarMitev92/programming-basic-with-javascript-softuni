function bonusPoints (input){
    let num = Number(input[0]);
    let points = 0;
    let pointEvenOr5 = 0

    if ( num <= 100){
        points +=5;
    }else if ( num > 100 && num <= 1000){
        points += 0.2 * num;
    }else if ( num > 1000){
        points += 0.1 * num;
    }

    if ( num % 2 === 0){
        pointEvenOr5 += 1;
    }

    if ( num % 10 === 5){
        pointEvenOr5 += 2;
    }
    console.log((points + pointEvenOr5).toFixed(1));
    console.log((num + points + pointEvenOr5).toFixed(1))
}
