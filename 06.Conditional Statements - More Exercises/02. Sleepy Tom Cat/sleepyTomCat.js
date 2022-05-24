function sleepyCatTom (input){

    let relaxDays = Number(input[0]);

    let workDays = 365 - relaxDays;
    let minutesForPlay = workDays*63 + relaxDays * 127;
    let diff = Math.abs(30000 - minutesForPlay);
    let hours = Math.floor(diff /60);
    let minutes = Math.ceil(diff% 60);

    if ( 30000 <= minutesForPlay){
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }else{
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
