function challengeTheWedding(input){
    let numMans = Number(input[0]);
    let numWomen = Number(input[1]);
    let numTables = Number(input[2]);
    let counter=0;
    let result = "";
    for (let i = 1; i <= numMans; i++){
        for (let j = 1; j <= numWomen; j++ ){
            if(numTables === 0){
                break;
            }
            if(numTables != 0 && counter < numTables){
                result += "(" + i + " <-> " + j + ")" + " "
            counter++;
            }else if(counter >= numTables){
                break;
            }
        }
    }
    console.log(result)
}
