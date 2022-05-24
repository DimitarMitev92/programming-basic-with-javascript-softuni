function logistic(input) {
  index = 0;
  let numCargo = Number(input[index]);
  index++;

  let priceMinibusPerTon = 200;
  let priceTruckPerTon = 175;
  let priceTrainPerTon = 120;
  let numAllTones = 0;
  let totalSum = 0;

  let counterMinibus = 0;
  let counterTruck = 0;
  let counterTrail = 0;

  for (i = 1; i <= numCargo; i++) {
    let currentCargo = Number(input[i]);
    numAllTones += currentCargo;
    if (currentCargo <= 3) {
      totalSum += priceMinibusPerTon * currentCargo;
      counterMinibus += currentCargo;
    } else if (currentCargo >= 4 && currentCargo <= 11) {
      totalSum += priceTruckPerTon * currentCargo;
      counterTruck += currentCargo;
    } else {
      totalSum += priceTrainPerTon * currentCargo;
      counterTrail += currentCargo;
    }
  }
  console.log((totalSum / numAllTones).toFixed(2));
  let perMinibus = (counterMinibus / numAllTones) * 100;
  let perTruck = (counterTruck / numAllTones) * 100;
  let perTrail = (counterTrail / numAllTones) * 100;
  console.log(`${perMinibus.toFixed(2)}%`);
  console.log(`${perTruck.toFixed(2)}%`);
  console.log(`${perTrail.toFixed(2)}%`);
}
