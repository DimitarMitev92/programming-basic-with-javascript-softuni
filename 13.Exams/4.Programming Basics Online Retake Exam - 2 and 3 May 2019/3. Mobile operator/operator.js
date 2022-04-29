function mobileOperator (input){
    let contrractTerm = (input[0]);
    let typeOfContract = (input[1]);
    let internet = (input[2]);
    let months = Number(input[3]);

    let price = 0;
    

    if(typeOfContract === "Small"){
        if(contrractTerm === "one"){
            price = 9.98;
        }else if(contrractTerm === "two"){
            price = 8.58;
        }
    }else if(typeOfContract === "Middle"){
        if(contrractTerm === "one"){
            price = 18.99;
        }else if(contrractTerm === "two"){
            price = 17.09;
        }
    }else if(typeOfContract === "Large"){
        if(contrractTerm === "one"){
            price = 25.98;
        }else if(contrractTerm === "two"){
            price = 23.59;
        }
    }else if(typeOfContract === "ExtraLarge"){
        if(contrractTerm === "one"){
            price = 35.99;
        }else if(contrractTerm === "two"){
            price = 31.79;
        }
    }
    let internetPrice = 0;

    if(internet === "yes"){
        if(price <= 10){
            internetPrice=5.5;
        }else if(price <= 30){
            internetPrice=4.35;
        }else if(price >30){
            internetPrice=3.85;
        }
    }else if (internet === "no"){
        internetPrice = 0;
    }
    let total = months* price + months*internetPrice;

    if(contrractTerm === "two"){
        total= total*(1 - 0.0375);
    }
    console.log(`${total.toFixed(2)} lv.`)
}
