function repainting (input){
    let nailon = Number(input[0]);
    let boq = Number(input[1]);
    let razreditel = Number(input[2]);
    let chasove = Number(input[3]);

    let totalNailon = (nailon + 2) * 1.5;
    let totalBoq = (boq + 0.1*boq)*14.5;
    let totalRazreditel = razreditel * 5;
    let torbichka = 0.4;
    let finalSum = totalNailon + totalBoq + totalRazreditel + torbichka;
    let sumMaistori = ( finalSum*0.3)*chasove;
    console.log(finalSum + sumMaistori);
}
