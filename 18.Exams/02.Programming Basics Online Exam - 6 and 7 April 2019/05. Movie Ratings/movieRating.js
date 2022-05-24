function solve(input) {
    let index = 0;
    let filmNums = Number(input[index]);
    index++;
    let highestRating = Number.MIN_VALUE;
    let highName = ``;
    let lowestRating = Number.MAX_VALUE;
    let lowestName = ``;
    let averageRating = 0;
    for (i = 1; i <= filmNums; i++) {
        let name = input[index];
        index++;
        let rating = Number(input[index]);
            index++;
        averageRating += rating;
        if (rating > highestRating) {
            highestRating = rating;
            highName = name;
        }
        if (rating < lowestRating) {
            lowestRating = rating;
            lowestName = name;
        }
    }
    console.log(`${highName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / filmNums).toFixed(1)}`);
}
