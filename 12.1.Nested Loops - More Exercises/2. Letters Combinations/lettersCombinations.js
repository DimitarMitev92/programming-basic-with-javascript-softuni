function lettersCombinations (input){
    let letterFirst = (input[0]);
    let letterLast = (input[1]);
    let letterMissed = (input[2]);
    let numLetterFirst = letterFirst.charCodeAt(0);                   
    let numLetterLast = letterLast.charCodeAt(0);
    let numLetterMissed =letterMissed.charCodeAt(0);
    let count = 0;
    let result = "";
    
    for(let i = numLetterFirst; i <=numLetterLast; i++){
        for( let j = numLetterFirst; j <=numLetterLast; j++){
            for(let k = numLetterFirst; k <= numLetterLast; k++){
                if( i === numLetterMissed || j === numLetterMissed || k === numLetterMissed){
                    continue;
                }else{
                    count++;
                    result += String.fromCharCode(i) + String.fromCharCode(j) +String.fromCharCode(k) + " "
                }
            }
        }
    }
    console.log(result + count)
}
