function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours= Number(input[3]);

    let totalNylon = (nylon + 2) * 1.5;
    let totalPaint = (paint + 0.1*paint)*14.5;
    let totalThinner = thinner * 5;
    let bag = 0.4;
    let finalSum = totalNylon + totalPaint + totalThinner + bag;
    let sumWorkers = ( finalSum*0.3)*hours;
    console.log(finalSum + sumWorkers);
}
