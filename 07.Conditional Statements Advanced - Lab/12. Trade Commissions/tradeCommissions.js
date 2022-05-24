function tradeComision (input){
    let town = input[0];
    let sales = Number(input[1]);
    let comision = 0;
    if (sales >= 0 && sales <=500 ){
        if( town === "Sofia"){
            comision = sales * 0.05;
            console.log(comision.toFixed(2))
        }else if ( town === "Varna"){
            comision = sales * 0.045;
            console.log(comision.toFixed(2))
        }else if ( town === "Plovdiv"){
            comision = sales * 0.055;
            console.log(comision.toFixed(2))
        }else{
            console.log("error");
        }
    }else if ( sales > 500 && sales <= 1000){
        if( town === "Sofia"){
            comision = sales * 0.07;
            console.log(comision.toFixed(2))
        }else if ( town === "Varna"){
            comision = sales * 0.075;
            console.log(comision.toFixed(2))
        }else if ( town === "Plovdiv"){
            comision = sales * 0.08;
            console.log(comision.toFixed(2))
        }else{
            console.log("error");
        }
    }else if ( sales > 1000 && sales <=10000){
        if( town === "Sofia"){
            comision = sales * 0.08;
            console.log(comision.toFixed(2))
        }else if ( town === "Varna"){
            comision = sales * 0.1;
            console.log(comision.toFixed(2))
        }else if ( town === "Plovdiv"){
            comision = sales * 0.12;
            console.log(comision.toFixed(2))
        }else{
            console.log("error");
        }
    }else if ( sales > 10000){
        if( town === "Sofia"){
            comision = sales * 0.12;
            console.log(comision.toFixed(2))
        }else if ( town === "Varna"){
            comision = sales * 0.13;
            console.log(comision.toFixed(2))
        }else if ( town === "Plovdiv"){
            comision = sales * 0.145;
            console.log(comision.toFixed(2))
        }else{
            console.log("error");
        }
    }else{
        console.log("error")
    }
}
