function timePlus15Min (input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let allTimePlus15 = hour * 60 + minutes + 15;

    let hoursAfter15 = Math.floor(allTimePlus15 / 60) ;
    let minutesAfter15 = allTimePlus15 % 60;

    if( hoursAfter15 >23){
        hoursAfter15-=24;
    }
    if ( minutesAfter15 < 9){
        console.log(`${hoursAfter15}:0${minutesAfter15}`)
    }else {
        console.log(`${hoursAfter15}:${minutesAfter15}`)
    }
}
