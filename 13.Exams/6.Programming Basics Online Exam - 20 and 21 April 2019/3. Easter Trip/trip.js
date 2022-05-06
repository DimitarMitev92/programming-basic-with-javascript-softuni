function easterTrip (input){
    let destination = (input[0]);
    let date = (input[1]);
    let nights = Number(input[2]);

    let price = 0;

    if(destination === "France"){
        if(date === "21-23"){
            price = 30;
        }else if(date === "24-27"){
            price = 35;
        }else if(date === "28-31"){
            price = 40;
        }
    }else if(destination === "Italy"){
        if(date === "21-23"){
            price = 28;
        }else if(date === "24-27"){
            price = 32;
        }else if(date === "28-31"){
            price = 39
        }
    }else if(destination === "Germany"){
        if(date === "21-23"){
            price = 32
        }else if(date === "24-27"){
            price = 37
        }else if(date === "28-31"){
            price = 43;
        }
    }
    let allSum = nights * price;
    console.log(`Easter trip to ${destination} : ${allSum.toFixed(2)} leva.`)
}
