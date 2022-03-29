function fuelTank(input) {
    let gasolinePerLiter = 2.22;
    let dieselPerLiter = 2.33;
    let gasPerLiter = 0.93

    let discountGasolinPerLiter = 0.18;
    let discountDieselPerLiter = 0.12;
    let discountGasPerLiter = 0.08;

    let typeOfFuel = input[0];
    let litersFuel = Number(input[1]);
    let card = input[2];

    let priceFuel = 0;

    if (typeOfFuel === "Gasoline") {
        if (litersFuel < 20) {
            if (card === "Yes") {
                priceFuel = (litersFuel * gasolinePerLiter) - (litersFuel * discountGasolinPerLiter);
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = litersFuel * gasolinePerLiter;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        } else if (litersFuel >= 20 && litersFuel <= 25) {
            if (card === "Yes") {
                priceFuel = (litersFuel * gasolinePerLiter) - (litersFuel * discountGasolinPerLiter);
                priceFuel = priceFuel * 0.92;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = (litersFuel * gasolinePerLiter);
                priceFuel = priceFuel * 0.92;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        } else if (litersFuel > 25) {
            if (card === "Yes") {
                priceFuel = (litersFuel * gasolinePerLiter) - (litersFuel * discountGasolinPerLiter);
                priceFuel = priceFuel * 0.90;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = (litersFuel * gasolinePerLiter);
                priceFuel = priceFuel * 0.90;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        }
    } else if (typeOfFuel === "Diesel") {
        if (litersFuel < 20) {
            if (card === "Yes") {
                priceFuel = (litersFuel * dieselPerLiter) - (litersFuel * discountDieselPerLiter);
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = litersFuel * dieselPerLiter;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        } else if (litersFuel >= 20 && litersFuel <= 25) {
            if (card === "Yes") {
                priceFuel = (litersFuel * dieselPerLiter) - (litersFuel * discountDieselPerLiter);
                priceFuel = priceFuel * 0.92;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = (litersFuel * dieselPerLiter);
                priceFuel = priceFuel * 0.92;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        } else if (litersFuel > 25) {
            if (card === "Yes") {
                priceFuel = (litersFuel * dieselPerLiter) - (litersFuel * discountDieselPerLiter);
                priceFuel = priceFuel * 0.90;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = (litersFuel * dieselPerLiter);
                priceFuel = priceFuel * 0.90;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        }
    } else if (typeOfFuel === "Gas") {
        if (litersFuel < 20) {
            if (card === "Yes") {
                priceFuel = (litersFuel * gasPerLiter) - (litersFuel * discountGasPerLiter);
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = litersFuel * gasPerLiter;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        } else if (litersFuel >= 20 && litersFuel <= 25) {
            if (card === "Yes") {
                priceFuel = (litersFuel * gasPerLiter) - (litersFuel * discountGasPerLiter);
                priceFuel = priceFuel * 0.92;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = (litersFuel * gasPerLiter);
                priceFuel = priceFuel * 0.92;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        } else if (litersFuel > 25) {
            if (card === "Yes") {
                priceFuel = (litersFuel * gasPerLiter) - (litersFuel *discountGasPerLiter);
                priceFuel = priceFuel * 0.90;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            } else {
                priceFuel = (litersFuel * gasPerLiter);
                priceFuel = priceFuel * 0.90;
                console.log(`${priceFuel.toFixed(2)} lv.`);
            }
        }
    }
}
