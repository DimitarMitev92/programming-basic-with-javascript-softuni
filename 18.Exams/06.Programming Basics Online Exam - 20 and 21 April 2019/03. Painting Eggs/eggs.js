function eggs(input){
    let sizeEgg = (input[0]);
    let colorEgg = (input[1]);
    let numEgg = Number(input[2]);

    let price = 0;

    if(sizeEgg === "Large"){
        if(colorEgg === "Red"){
            price = 16
        }else if( colorEgg === "Green"){
            price = 12
        }else if(colorEgg === "Yellow"){
            price = 9
        }
    }else if(sizeEgg === "Medium"){
        if(colorEgg === "Red"){
            price = 13
        }else if( colorEgg === "Green"){
            price = 9
        }else if(colorEgg === "Yellow"){
            price = 7
        }
    }else if(sizeEgg === "Small"){
        if(colorEgg === "Red"){
            price = 9;
        }else if( colorEgg === "Green"){
            price = 8;
        }else if(colorEgg === "Yellow"){
            price = 5;
        }
    }
    let totalSum = (price * numEgg)* 0.65;
    console.log(`${totalSum.toFixed(2)} leva.`);
}
