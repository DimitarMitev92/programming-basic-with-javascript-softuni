function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isMagicNumberFound = false;
    let combinations = 0;
    let x1=0;
    let x2=0;
    for(let x1 = start; x1 <=end; x1++){
        for(let x2 = start; x2 <=end; x2++){
            combinations++;
            if(x1+x2 == magicNumber){
                isMagicNumberFound = true;
                console.log(`Combination N:${combinations} (${x1} + ${x2} = ${magicNumber})`);
                return;
            }
        }
    }
    if(!isMagicNumberFound){
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
