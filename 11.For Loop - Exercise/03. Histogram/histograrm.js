function histogram(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    let counterP1 = 0;
    let counterP2 = 0;
    let counterP3 = 0;
    let counterP4 = 0;
    let counterP5 = 0;
    let counterAll = 0;
    for(let i = 1; i <=num; i++){
        let result = input[i];
        if(result < 200){
            counterP1++;
            counterAll++;
        }else if(result >= 200 && result <= 399){
            counterP2++;
            counterAll++;
        }else if(result >= 400 && result <= 599){
            counterP3++;
            counterAll++;
        }else if(result >= 600 && result <= 799){
            counterP4++;
            counterAll++;
        }else{
            counterP5++;
            counterAll++;
        }
    }
    let percentP1 = ((counterP1/counterAll)*100);
    let percentP2 = ((counterP2/counterAll)*100);
    let percentP3 = ((counterP3/counterAll)*100);
    let percentP4 =((counterP4/counterAll)*100);
    let percentP5 =((counterP5/counterAll)*100);

    console.log(`${percentP1.toFixed(2)}%`);
    console.log(`${percentP2.toFixed(2)}%`);
    console.log(`${percentP3.toFixed(2)}%`);
    console.log(`${percentP4.toFixed(2)}%`);
    console.log(`${percentP5.toFixed(2)}%`);
  
}  
