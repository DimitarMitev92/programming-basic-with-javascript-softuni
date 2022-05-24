function travelAgency(input){
    let town = (input[0]);
    let packet = (input[1]);
    let vip = (input[2]);
    let days = Number(input[3]);
    let price = 0;
    if(town === "Bansko" || town === "Borovets"){
        if(packet === "withEquipment"){
            if(vip === "yes"){
                price = 100*0.9;
            }else if(vip === "no"){
                price = 100;
            }else{
                console.log(`Invalid input!`)
            }
        }else if (packet === "noEquipment"){
            if(vip === "yes"){
                price = 80 * 0.95;
            }else if(vip === "no"){
                price = 80;
            }else{
                console.log(`Invalid input!`)
            }
        }else{
            console.log(`Invalid input!`)

        }
    }else if ( town === "Varna" || town === "Burgas"){
        if(packet === "withBreakfast"){
            if(vip === "yes"){
                price = 130 * 0.88;
            }else if(vip === "no"){
                price = 130;
            }else{
                console.log(`Invalid input!`)
            }
        }else if (packet === "noBreakfast"){
            if(vip === "yes"){
                price = 100 * 0.93;
            }else if(vip === "no"){
                price = 100
            }else{
                console.log(`Invalid input!`)
            }
        }else{
            console.log(`Invalid input!`)
        }
    }else{
        console.log(`Invalid input!`)
    }
    let total = price * days;
    if(days > 7){
        total=total - price*1;
    }
    
    if(days >= 1 && total != 0){
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
    }else if(days < 1){
        console.log(`Days must be positive number!`);
    }
}
