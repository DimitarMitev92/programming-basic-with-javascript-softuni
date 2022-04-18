function pricePairs(input){
    let firstPair = Number(input[0]);
    let secondPair = Number(input[1]);
    let firstDiff = Number(input[2]);
    let secondDiff = Number(input[3]);

    for( let first = firstPair ; first <= (firstPair+firstDiff) ; first++){
        for( let second = secondPair ; second <= (secondPair+secondDiff) ; second++){
            let fisrtSqrt = Number(Math.floor(Math.sqrt(first)));
            let secondSqrt = Number(Math.floor(Math.sqrt(second)));
            let isPrime1 = true;
            let isPrime2 = true;

            for(let first1 = 2 ; first1 <= fisrtSqrt ; first1 ++){
                if(first % first1 == 0){
                    isPrime1=false;
                }
            }
            for(let second2 = 2 ; second2 <= secondSqrt ; second2++){
                if(second % second2 == 0){
                    isPrime2 = false;
                }
            }
            if(isPrime1 == true && isPrime2 == true){
                console.log(`${first}${second}`);
            }
        }
    }
}
