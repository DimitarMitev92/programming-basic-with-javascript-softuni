function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let distination = 0;
    let place = 0;
    let money = 0;

    if (budget <= 100) {
        distination = "Bulgaria";
        if (season === "summer") {
            place = "Camp";
            money = 0.3 * budget
        } else if (season === "winter") {
            place = "Hotel";
            money = 0.7 * budget;
        }
    } else if (budget > 100 && budget <= 1000) {
        distination = "Balkans";
        if (season === "summer") {
            place = "Camp";
            money = 0.4 * budget
        } else if (season === "winter") {
            place = "Hotel";
            money = 0.8 * budget;
        }
    } else if (budget > 1000) {
        if (season === "summer" || season === "winter") {
            place = "Hotel";
            distination = "Europe";
            money = 0.9 * budget;
        }
    }
    console.log(`Somewhere in ${distination}`);
    console.log(`${place} - ${money.toFixed(2)}`);
}
