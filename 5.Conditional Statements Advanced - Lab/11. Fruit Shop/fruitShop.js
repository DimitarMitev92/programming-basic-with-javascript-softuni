function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let result = 0;
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if( fruit === "banana"){
            result = quantity * 2.5;
            console.log(result.toFixed(2));
        }else if ( fruit === "apple"){
            result = quantity* 1.2;
            console.log(result.toFixed(2));
        }else if ( fruit === "orange"){
            result = quantity * 0.85;
            console.log(result.toFixed(2));
        }else if ( fruit === "grapefruit"){
            result=quantity* 1.45;
            console.log(result.toFixed(2));
        }else if ( fruit === "kiwi"){
            result = quantity*2.7;
            console.log(result.toFixed(2));
        }else if ( fruit === "pineapple"){
            result = quantity * 5.5;
            console.log(result.toFixed(2))
        }else if (fruit === "grapes"){
            result = quantity*3.85;
            console.log(result.toFixed(2))
        }else{
            console.log("error")
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if( fruit === "banana"){
            result = quantity * 2.7;
            console.log(result.toFixed(2));
        }else if ( fruit === "apple"){
            result = quantity* 1.25;
            console.log(result.toFixed(2));
        }else if ( fruit === "orange"){
            result = quantity * 0.9;
            console.log(result.toFixed(2));
        }else if ( fruit === "grapefruit"){
            result=quantity* 1.60;
            console.log(result.toFixed(2));
        }else if ( fruit === "kiwi"){
            result = quantity*3;
            console.log(result.toFixed(2));
        }else if ( fruit === "pineapple"){
            result = quantity * 5.6;
            console.log(result.toFixed(2))
        }else if (fruit === "grapes"){
            result = quantity*4.2;
            console.log(result.toFixed(2))
        }else{
            console.log("error")
        }
    } else {
        console.log("error");
    }
}
