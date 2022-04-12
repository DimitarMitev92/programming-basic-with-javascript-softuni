function sumOfTwoNumbers(input){
    const firstNum = Number(input[0]);
    const lastNum = Number(input[1]);
    const magicNum = Number(input[2])
    let combinationCounter=0;
    let isFound = false;
    for(let i = firstNum; i <=lastNum;i++){
        for(let j = firstNum; j <=lastNum; j++){
            combinationCounter++;
            if(magicNum ===(i + j)){
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            } 

        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}
