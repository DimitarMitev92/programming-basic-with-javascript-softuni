function easterDecoration (input){
    let index = 0;
    let customers = Number(input[index]);
    index++;

    let basket = 1.5;
    let wreath = 3.8;
    let chocolateBunny = 7;
    let total = 0;
    let averageMoney = 0;
    let currentClientSum = 0;
    let count = 0;

    for(let i = 1; i <= customers; i++){
        let command = (input[index]);
        index++;
        while (command != "Finish"){
            if(command === "basket"){
                count++;
                currentClientSum+=basket;
            }else if(command === "wreath"){
                count++;
                currentClientSum+=wreath;
            }else if(command === "chocolate bunny"){
                count++;
                currentClientSum+=chocolateBunny;
            }
            command=(input[index]);
            index++;
        }
        

        if(count % 2 === 0){
            currentClientSum*=0.8;
        }
        if(command === "Finish"){
            console.log(`You purchased ${count} items for ${currentClientSum.toFixed(2)} leva.`);
        }
        total += currentClientSum;
        count=0;
        currentClientSum=0;
    }
    averageMoney=(total/customers);
    console.log(`Average bill per client is: ${averageMoney.toFixed(2)} leva.`)
}
