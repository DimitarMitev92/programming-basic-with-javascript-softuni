function housePainting(input){
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);

    const frontAndBackSides = (2*x*x) - (1.2*2);
    const sides = (2*x*y) - (2*1.5*1.5);
    const green = frontAndBackSides + sides;
    console.log((green / 3.4).toFixed(2));

    const triangles = (x*h/2)*2;
    const roofRectangle = 2*x * y;
    const red = triangles + roofRectangle;
    console.log((red/4.3).toFixed(2)); 
}
