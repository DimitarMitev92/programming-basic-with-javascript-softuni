function hotelRoom (input){
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartamentPrice = 0;

    if (month === "May" || month === "October"){
        studioPrice = 50;
        apartamentPrice = 65;
    }else if ( month === "June" || month === "September"){
        studioPrice = 75.2;
        apartamentPrice = 68.7;
    }else if (month === "July" || month === "August"){
        studioPrice = 76;
        apartamentPrice = 77;
    }

    if(nights > 14){
        apartamentPrice *=0.9;
    }

    if( nights > 14 && (month === "June" || month === "September")){
        studioPrice *=0.8;
    }else if (nights > 14 && (month === "May" || month === "October")){
        studioPrice *=0.7;
    }else if(nights > 7 && ( month === "May" || month === "October")){
        studioPrice *= 0.95;
    }
    console.log(`Apartment: ${(nights*apartamentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights*studioPrice).toFixed(2)} lv.`);
}
