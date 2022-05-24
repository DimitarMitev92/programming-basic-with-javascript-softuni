function areaFigures (input){
    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    if(figure === "square"){
        area = a * a;
        console.log(area.toFixed(3));
    }else if ( figure === "rectangle"){
        area = a * b;
        console.log(area.toFixed(3));
    }else if ( figure === "circle"){
        area=Math.PI*a*a;
        console.log(area.toFixed(3));
    }else if ( figure === "triangle"){
        area = a * b/2;
        console.log(area.toFixed(3));
    }
}
