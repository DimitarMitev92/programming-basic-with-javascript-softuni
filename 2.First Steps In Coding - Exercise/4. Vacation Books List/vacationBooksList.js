function summberBooks (input){
    const numPages = Number(input[0]);
    const pagesPer1hour = Number(input[1]);
    const days = Number(input[2]);

    let timeForBook = numPages / pagesPer1hour;
    let neededHourPerDay = timeForBook / days;
    console.log(neededHourPerDay.toFixed(1));
}
