function moviePremier (input){
    let projection =(input[0]);
    let packForMovie = (input[1]);
    let numTickets = Number(input[2]);

    let price = 0;

    if(projection === "John Wick"){
        if(packForMovie === "Drink"){
            price = 12
        }else if(packForMovie === "Popcorn"){
            price = 15
        }else if(packForMovie === "Menu"){
            price = 19
        }
    }else if(projection === "Star Wars"){
        if(packForMovie === "Drink"){
            price = 18
        }else if(packForMovie === "Popcorn"){
            price = 25
        }else if(packForMovie === "Menu"){
            price = 30
        }
    }else if(projection === "Jumanji"){
        if(packForMovie === "Drink"){
            price = 9
        }else if(packForMovie === "Popcorn"){
            price = 11
        }else if(packForMovie === "Menu"){
            price = 14
        }
    }
    if(projection === "Star Wars" && numTickets >= 4){
        price*=0.7;
    }else if(projection === "Jumanji" && numTickets === 2){
        price*=0.85;
    }
    console.log(`Your bill is ${(numTickets * price).toFixed(2)} leva.`);
    
}
