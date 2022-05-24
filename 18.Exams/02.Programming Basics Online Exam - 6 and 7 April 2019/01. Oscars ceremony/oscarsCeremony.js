function oscarsCeremony (input){
    let rentHall = Number(input[0]);

    let figurines = 0.7 * rentHall;
    let catering = 0.85 * figurines;
    let soundSystem = 0.5 * catering;

    let totalSum = rentHall + figurines + catering + soundSystem;
    console.log(totalSum.toFixed(2))
}
