function oscarsWeekInCinema (input){
    let nameMovie = (input[0]);
    let typeOfHall = (input[1]);
    let numAudience = (input[2]);

    let price = 0;

    if(nameMovie === "A Star Is Born"){
        if(typeOfHall === "normal"){
            price = 7.50;
        }else if( typeOfHall === "luxury"){
            price = 10.50;
        }else if ( typeOfHall === "ultra luxury"){
            price = 13.50;
        }
    }else if ( nameMovie === "Bohemian Rhapsody"){
        if(typeOfHall === "normal"){
            price = 7.35;
        }else if( typeOfHall === "luxury"){
            price = 9.45;
        }else if ( typeOfHall === "ultra luxury"){
            price = 12.75;
        }
    }else if ( nameMovie === "Green Book"){
        if(typeOfHall === "normal"){
            price = 8.15;
        }else if( typeOfHall === "luxury"){
            price = 10.25;
        }else if ( typeOfHall === "ultra luxury"){
            price = 13.25;
        }
    }else if ( nameMovie === "The Favourite"){
        if(typeOfHall === "normal"){
            price = 8.75;
        }else if( typeOfHall === "luxury"){
            price = 11.55;
        }else if ( typeOfHall === "ultra luxury"){
            price = 13.95;
        }
    }
    let totalSum = numAudience* price;
    console.log(`${nameMovie} -> ${totalSum.toFixed(2)} lv.`)
}
