function carForRent (input){
    let budget = Number(input[0]);
    let season = input[1];

    let car = 0;
    let sum = 0;


    if(budget <= 100){
        console.log("Economy class");
    }else if ( budget > 100 && budget <= 500){
        console.log("Compact class");
    }else {
        console.log("Luxury class")
    }

    if( budget <= 100){
        if(season === "Summer"){
            car = "Cabrio";
            sum = 0.35 * budget;
        }else if ( season === "Winter"){
            car = "Jeep";
            sum = 0.65 * budget;
        }
    }else if ( budget > 100 && budget <= 500){
        if(season === "Summer"){
            car = "Cabrio";
            sum = 0.45 * budget;
        }else if ( season === "Winter"){
            car = "Jeep";
            sum = 0.80 * budget;
        }
    }else {
        car = "Jeep";
        sum = 0.90 * budget;
    }

    console.log(`${car} - ${sum.toFixed(2)}`);
}
