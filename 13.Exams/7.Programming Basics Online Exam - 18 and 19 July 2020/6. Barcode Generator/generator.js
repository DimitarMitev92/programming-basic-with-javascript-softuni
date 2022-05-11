function barcodeGenerator(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let firstStart = parseInt(start/1000);
    let secondStart = parseInt((start/100)%10);
    let thirdStart = parseInt((start/10)%10);
    let fourthStart = parseInt(start%10);

    let firstEnd = parseInt(end/1000);
    let secondEnd = parseInt((end/100)%10);
    let thirdEnd = parseInt((end/10)%10);
    let fourthEnd = parseInt(end%10);

    result="";

    for(let num1 = firstStart;num1 <= firstEnd; num1++){
        for(let num2 = secondStart; num2 <= secondEnd; num2++){
            for(let num3 = thirdStart; num3 <= thirdEnd; num3++){
                for(let num4 = fourthStart;num4 <=fourthEnd; num4++){
                    if(num1 % 2 != 0 && num2 % 2 != 0 && num3 %2 != 0 && num4 %2 != 0){
                        result+="" + num1 + num2 + num3 + num4 + " ";
                    }
                }
            }
        }
    }
    console.log(result)
}
