function skiTrip (input){
    let days = Number(input[0]);
    let room = (input[1]);
    let grade = (input[2]);

    let nights = days - 1;

    let priceRoomForOnePerson = 18;
    let priceApartment = 25;
    let pricePresidentApartment = 35;

    let priceNights = 0;

    if(room === "room for one person"){
        if(days < 10){
            priceNights = priceRoomForOnePerson * nights;
        }else if ( days >=10 && days <=15){
            priceNights = priceRoomForOnePerson * nights;

        }else if ( days > 15){
            priceNights = priceRoomForOnePerson * nights;

        }
    }else if ( room === "apartment"){
        if(days < 10){
            priceNights = priceApartment * nights*0.7;
        }else if ( days >=10 && days <=15){
            priceNights = priceApartment * nights*0.65;

        }else if ( days > 15){
            priceNights = priceApartment * nights*0.5;
        }
    }else if ( room === "president apartment"){
        if(days < 10){
            priceNights = pricePresidentApartment * nights*0.9;
        }else if ( days >=10 && days <=15){
            priceNights = pricePresidentApartment * nights*0.85;

        }else if ( days > 15){
            priceNights = pricePresidentApartment * nights*0.8;
        }
    }

    if(grade === "positive"){
        priceNights = priceNights + priceNights*0.25;
        console.log(priceNights.toFixed(2));
    }else if ( grade === "negative"){
        priceNights = priceNights - priceNights*0.1;
        console.log(priceNights.toFixed(2));
    }
}
