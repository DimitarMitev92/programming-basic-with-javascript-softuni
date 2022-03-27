function sumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let allTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(allTime / 60);
    let seconds = (allTime % 60);

    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
