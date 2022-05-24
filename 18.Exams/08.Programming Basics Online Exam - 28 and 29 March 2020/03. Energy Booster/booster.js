function energyBooster (input){
    let fruit = input[0];
    let size = input[1];
    let numSet = Number(input[2]);

    let price = 0;

    if(fruit === "Watermelon"){
        if(size === "small"){
            price = 2 * 56;
        }else if ( size === "big"){
            price = 5 * 28.7
        }
    }else if ( fruit === "Mango"){
        if(size === "small"){
            price = 2 * 36.66
        }else if ( size === "big"){
            price = 5 * 19.60
        }
    }else if ( fruit === "Pineapple"){
        if(size === "small"){
            price = 2 * 42.10
        }else if ( size === "big"){
            price = 5 * 24.80
        }
    }else if ( fruit === "Raspberry"){
        if(size === "small"){
            price = 2 * 20
        }else if ( size === "big"){
            price = 5 * 15.20
        }
    }
    
    let allSum = price * numSet;

    if(allSum >=400 && allSum <=1000){
        allSum = allSum*0.85;
    }else if ( allSum > 1000){
        allSum = allSum*0.5;
    }
    console.log(`${allSum.toFixed(2)} lv.`)
}
