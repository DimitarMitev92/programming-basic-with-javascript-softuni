function birthdayParty(input) {
    let rentHall = Number(input);

    let cake = 0.2 * rentHall;
    let drinks = 0.55 * cake;
    let animator = (1/3)*rentHall;

    let totalPrice = rentHall + cake + drinks+ animator;
    console.log(totalPrice);
}
