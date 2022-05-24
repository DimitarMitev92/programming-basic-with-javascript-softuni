function balls(input){
    let index = 0;
    let N = Number(input[index]);
    index++
    let colors = (input[index]);
    index++;

    let points =0;
    let counterRed = 0;
    let counterOrange = 0;
    let counterYellow = 0;
    let counterWhite = 0;
    let counterBlack = 0;
    let counterOthers = 0;

    for( let i = 1; i <= N ; i++){
        let currentBall =input[i];
        if(currentBall === "red"){
            points+=5;
            counterRed++;
        }else if ( currentBall === "orange"){
            points+=10;
            counterOrange++;
        }else if ( currentBall === "yellow"){
            points+=15;
            counterYellow++;
        }else if ( currentBall === "white"){
            points+=20;
            counterWhite++;
        }else if ( currentBall === "black"){
            points =Math.floor(points -(points/2));
            counterBlack++;
        }else{
            counterOthers++;
        }
    }
    let allPoints = points
    console.log(`Total points: ${allPoints}`);
    console.log(`Red balls: ${counterRed}`);
    console.log(`Orange balls: ${counterOrange}`);
    console.log(`Yellow balls: ${counterYellow}`);
    console.log(`White balls: ${counterWhite}`);
    console.log(`Other colors picked: ${counterOthers}`);
    console.log(`Divides from black balls: ${counterBlack}`)
}
