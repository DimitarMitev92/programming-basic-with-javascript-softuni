function aluminium(input) {
  let countOfAluminium = Number(input[0]);
  let typeOfAluminium = input[1];
  let deliveryType = input[2];
  let delivery = Number(60);
  let singlePrice = 0;
  let totalPrice = 0;
  if (countOfAluminium <= 10) {
    console.log(`Invalid order`);
  } else {
    switch (typeOfAluminium) {
      case "90X130":
        singlePrice = 110;
        if (countOfAluminium >= 30 && countOfAluminium <= 60) {
          singlePrice -= singlePrice * 0.05;
        } else if (countOfAluminium >= 60) {
          singlePrice -= singlePrice * 0.08;
        }
        break;
      case "100X150":
        singlePrice = 140;
        if (countOfAluminium >= 40 && countOfAluminium <= 80) {
          singlePrice -= singlePrice * 0.06;
        } else if (countOfAluminium >= 80) {
          singlePrice -= singlePrice * 0.1;
        }
        break;
      case "130X180":
        singlePrice = 190;
        if (countOfAluminium >= 20 && countOfAluminium <= 50) {
          singlePrice -= singlePrice * 0.07;
        } else if (countOfAluminium >= 50) {
          singlePrice -= singlePrice * 0.12;
        }
        break;
      case "200X300":
        singlePrice = 250;
        if (countOfAluminium >= 25 && countOfAluminium <= 50) {
          singlePrice -= singlePrice * 0.09;
        } else if (countOfAluminium >= 50) {
          singlePrice -= singlePrice * 0.14;
        }
        break;
    }

    switch (deliveryType) {
      case "With delivery":
        totalPrice = singlePrice * countOfAluminium + delivery;
        if (countOfAluminium >= 99) {
          totalPrice -= totalPrice * 0.04;
        }
        break;
      case "Without delivery":
        totalPrice = singlePrice * countOfAluminium;
        break;
    }
    console.log(`${totalPrice.toFixed(2)} BGN`);
  }
}
