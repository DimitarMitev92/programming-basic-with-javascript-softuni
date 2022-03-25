function perimeterAndAreaCircle (input){
    const r = Number(input[0]);
    const area = Math.PI * r * r;
    const perimetar =  2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(perimetar.toFixed(2));
}
