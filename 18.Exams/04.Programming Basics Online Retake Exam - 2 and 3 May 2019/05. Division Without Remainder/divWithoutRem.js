function devisionWithoutRemainder (input){
    let index = 0;
    let num = Number(input[index]);
    index++;

    let counterP1 = 0; // %  2 === 0
    let counterP2 = 0; // % 3 === 0
    let counterP3 =0; // % 4 === 0
    let counterAll = 0;


    for(let i = 0; i < num ; i++){
        let currentNum = Number(input[index]);
        counterAll++;
        if(currentNum % 2 === 0){
            counterP1++;
        }
        if(currentNum % 3 === 0){
            counterP2++;
        }
        if(currentNum % 4 === 0){
            counterP3++;
        }
        index++;
    }
    
    let resultP1 = (counterP1/counterAll)*100;
    let resultP2 = (counterP2/counterAll)*100;
    let resultP3 = (counterP3/counterAll)*100;

    console.log(`${resultP1.toFixed(2)}%`);
    console.log(`${resultP2.toFixed(2)}%`);
    console.log(`${resultP3.toFixed(2)}%`)
}
