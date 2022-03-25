function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeOfTank = length * width * height;
    let volumeInLiters = volumeOfTank / 1000;
    let neededlITRES = volumeInLiters * (1 - (percent / 100));
    console.log(neededlITRES);
}
