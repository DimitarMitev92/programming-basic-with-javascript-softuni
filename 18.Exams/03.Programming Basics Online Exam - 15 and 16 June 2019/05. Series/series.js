function serials(input){
    let index=0;
    let budget = Number(input[index]);
    index++;
    let numSerials = Number(input[index]);
    index++;
    let percentThrones = 0.5;
    let percentLucifer = 0.6;
    let percentProtector = 0.7;
    let percentTotalDrama = 0.8;
    let percentArea = 0.9;

    let totalSum = 0;

    for(let i = 0; i<numSerials; i++){
        let nameSerial = input[index];
        index++;
        let priceSerial = Number(input[index]);
        index++;
        if(nameSerial === "Thrones"){
            totalSum+= priceSerial * percentThrones;
        }else if( nameSerial === "Lucifer"){
            totalSum+= priceSerial*percentLucifer
        }else if(nameSerial === "Protector"){
            totalSum+=priceSerial*percentProtector
        }else if(nameSerial === "TotalDrama"){
            totalSum+=priceSerial*percentTotalDrama
        }else if(nameSerial === "Area"){
            totalSum+=priceSerial*percentArea
        }else{
            totalSum+=priceSerial
        }
    }
    if(totalSum > budget){
        console.log(`You need ${(totalSum - budget).toFixed(2)} lv. more to buy the series!`)
    }else{
        console.log(`You bought all the series and left with ${(budget - totalSum).toFixed(2)} lv.`)
    }
}
