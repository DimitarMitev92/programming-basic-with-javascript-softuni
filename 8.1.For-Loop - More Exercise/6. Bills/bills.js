function bills (input){
    index = 0;
    let month = Number(input[index]);
    index++;

    let waterPrice = 20;
    let internetPrice = 15;

    let sumElectricity = 0;
    let sumWater = 0;
    let sumInternet = 0;
    let other = 0;

    for(let i = 0; i < month ; i++){
        let currentBill = Number(input[index]);
        index++;

        sumElectricity+=currentBill;
        sumWater =waterPrice*month;
        sumInternet =internetPrice*month;
        other = (sumElectricity + sumWater + sumInternet)*1.2;

    }
    let avgSum = (sumElectricity + sumWater + sumInternet + other)/ month;
    console.log(`Electricity: ${sumElectricity.toFixed(2)} lv`);
    console.log(`Water: ${sumWater.toFixed(2)} lv`);
    console.log(`Internet: ${sumInternet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${avgSum.toFixed(2)} lv`);
}
