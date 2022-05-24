function easterShop (input){
    let index=0;
    let quantityEggs = Number(input[index]);
    index++;
    let command = (input[index]);
    index++;
    let leftEggs = quantityEggs;
    let soldEggs = 0;

    while(command != "Close"){
        let countEggs = Number(input[index]);
        if(command === "Buy"){
            if(countEggs <= leftEggs){
                leftEggs = leftEggs - countEggs;
                soldEggs +=countEggs;
            }else{
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${leftEggs}.`);
                break;
            }
        }else if ( command === "Fill"){
            leftEggs = leftEggs + countEggs;

        }

        command=(input[index]);
        index++
    }
    if(command === "Close"){
        console.log(`Store is closed!`);
        console.log(`${soldEggs} eggs sold.`)
    }

}
