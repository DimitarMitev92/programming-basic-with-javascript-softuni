function flowers(input) {
    let numChrysanthemums = Number(input[0]);
    let numRoses = Number(input[1]);
    let numTulips = Number(input[2]);
    let season = input[3];
    let itIsWeekend = input[4];

    let pricechrysanthemums = 0;
    let priceRoses = 0;
    let priceTulips = 0;

    let allFlowers = numChrysanthemums + numRoses + numTulips;
    let discountFlowers = 1;
    let discountWeekend = 1;
    let discount20 = 1;

    if (season === "Spring" || season === "Summer") {
        if (itIsWeekend === "Y") {
            pricechrysanthemums = 2;
            priceRoses = 4.1;
            priceTulips = 2.5;
            discountFlowers += 0.15
            if (numTulips > 7 && season === "Spring") {
                discountWeekend -= 0.05;
            }
            if (allFlowers > 20) {
                discount20 -= 0.2;
            }
        } else if (itIsWeekend === "N") {
            pricechrysanthemums = 2;
            priceRoses = 4.1;
            priceTulips = 2.5;
        }
    } else if (season === "Autumn" || season === "Winter") {
        pricechrysanthemums = 3.75;
        priceRoses = 4.5;
        priceTulips = 4.15;
        if (itIsWeekend === "Y") {
            pricechrysanthemums = 3.75;
            priceRoses = 4.5;
            priceTulips = 4.15;
            discountFlowers +=0.15
            if (numRoses >= 10 && season === "Winter") {
                discountWeekend -= 0.1;
            }
            if (allFlowers > 20) {
                discount20 -= 0.2;
            }
        } else if (itIsWeekend === "N") {
            pricechrysanthemums = 3.75;
            priceRoses = 4.5;
            priceTulips = 4.15;
            if (numRoses >= 10 && season === "Winter") {
                discountWeekend -= 0.1;
            }
            if (allFlowers > 20) {
                discount20 -= 0.2;
            }
        }
    }
    let allSum = discount20*discountFlowers*discountWeekend*(numChrysanthemums * pricechrysanthemums + numRoses * priceRoses + numTulips * priceTulips) + 2;
    console.log(`${allSum.toFixed(2)}`);
}
