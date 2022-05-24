function pypesInPool (input){
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let volumeAfterLeave = P1 * H + P2 * H;
    let percentVolume = (volumeAfterLeave / V)* 100;
    let percentP1 = ((P1*H)/ volumeAfterLeave)*100;
    let percentP2 = ((P2*H)/ volumeAfterLeave)*100;
    let result = Math.abs(volumeAfterLeave - V);

    if(V >= volumeAfterLeave){
        console.log(`The pool is ${percentVolume.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
    }else{
        console.log(`For ${H} hours the pool overflows with ${result.toFixed(2)} liters.`);
    }
}
