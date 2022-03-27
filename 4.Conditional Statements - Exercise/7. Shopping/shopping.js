function shoping (input){
    let budget = Number(input[0]);
    let video = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let videoPrice = 250;
    let cpuPrice = 0.35 * 250 * video;
    let ramPrice = 0.1 * 250 * video;

    let totalSum = videoPrice * video + cpuPrice * cpu + ramPrice * ram;
    
    if (video > cpu){
        totalSum = totalSum*0.85;
    }

    result = Math.abs(budget - totalSum);

    if ( budget >= totalSum){
        console.log(`You have ${result.toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`)
    }
}
