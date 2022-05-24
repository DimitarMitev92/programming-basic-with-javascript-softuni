function suitCasesLoad(input){
    index=0;
    let capasety = Number(input[index]);
    index++;
    let command = (input[index]);
    index++;

    let casesCapasety = 0;
    let counterSuitCases = 0;
    while (command !== "End"){
        let currentCase = Number(command);
        casesCapasety+=currentCase;
        counterSuitCases++;
        if(capasety < casesCapasety){
            console.log(`No more space!`)
            counterSuitCases--;
            break;
        }
        command=(input[index]);
        index++;
    }
    if(command === "End"){
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${counterSuitCases} suitcases loaded.`)
    
}
