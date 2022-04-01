function truckDriver (input){
    const season = String(input[0]);
    const kmPerMonth =Number(input[1]);

    if (kmPerMonth <= 5000 && (season == "Spring" || season == "Autumn")){
        totalSum = kmPerMonth*4*0.75;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }else if (kmPerMonth <= 5000 && season == "Summer"){
        totalSum = kmPerMonth*4*0.9;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }else if (kmPerMonth <= 5000 && season == "Winter"){
        totalSum = kmPerMonth*4*1.05;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }else if (kmPerMonth > 5000 && kmPerMonth <=10000 && ( season == "Spring" || season == "Autumn")){
        totalSum = kmPerMonth*4*0.95;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }else if (kmPerMonth > 5000 && kmPerMonth <=10000 && season == "Summer"){
        totalSum = kmPerMonth*4*1.1;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }else if (kmPerMonth > 5000 && kmPerMonth <= 10000 && season == "Winter"){
        totalSum = kmPerMonth*4*1.25;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }else if (kmPerMonth > 10000 && kmPerMonth <= 20000 && (season == "Winter" || season == "Spring" || season == "Summer" || season == "Autumn")){
        totalSum = kmPerMonth*4*1.45;
        salary = totalSum - totalSum*0.1;
        console.log((salary).toFixed(2));
    }
}
