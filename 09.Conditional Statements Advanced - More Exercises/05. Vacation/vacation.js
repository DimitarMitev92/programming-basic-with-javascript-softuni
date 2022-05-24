function vacation (input){
    const budget = Number(input[0]);
    const season = String(input[1]);

    if ( budget <= 1000 && season == "Summer"){
        price = budget * 0.65;
        console.log(`Alaska - Camp - ${(price).toFixed(2)}`);
    }else if ( budget <= 1000 && season == "Winter"){
        price = budget * 0.45;        
        console.log(`Morocco - Camp - ${(price).toFixed(2)}`);

    }else if ( budget > 1000 && budget <= 3000 && season == "Summer"){
        price = budget * 0.80;
        console.log(`Alaska - Hut - ${(price).toFixed(2)}`);
    }else if ( budget > 1000 && budget <= 3000 && season == "Winter"){
        price = budget * 0.60;
        console.log(`Morocco - Hut - ${(price).toFixed(2)}`);

    }else if ( budget > 3000 && season == "Summer" ){
        price = budget * 0.90;
        console.log(`Alaska - Hotel - ${(price).toFixed(2)}`);
    }else if ( budget > 3000 && season == "Winter" ){
        price = budget * 0.90;
        console.log(`Morocco - Hotel - ${(price).toFixed(2)}`);
    }
}
