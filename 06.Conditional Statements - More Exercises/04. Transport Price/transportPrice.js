function transportPrice(input) {
    let km = Number(input[0]);
    let dayOrNight = input[1];

    let sum = 0;

    if (km >= 100) {
        if (dayOrNight === "day") {
            sum = 0.06 * km;
            console.log(sum.toFixed(2));
        } else if (dayOrNight === "night") {
            sum = 0.06 * km;
            console.log(sum.toFixed(2));
        }
    } else if (km < 100 && km >= 20) {
        if (dayOrNight === "day") {
            sum = 0.09 * km;
            console.log(sum.toFixed(2));
        } else if (dayOrNight === "night") {
            sum = 0.09 * km;
            console.log(sum.toFixed(2));
        }
    } else if (km < 20) {
        if (dayOrNight === "day") {
            sum = 0.79 * km + 0.70;
            console.log(sum.toFixed(2));
        } else if (dayOrNight === "night") {
            sum = 0.90 * km + 0.7;
            console.log(sum.toFixed(2));
        }
    }
}
