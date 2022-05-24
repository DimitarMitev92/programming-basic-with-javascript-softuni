function tennisEquipment (input){
    let priceTennisRocket =Number(input[0]);
    let numTennisRockets = Number(input[1]);
    let numSneakers = Number(input[2]);

    let priceAllRockets = priceTennisRocket * numTennisRockets;
    let pricePerSneakers = priceTennisRocket / 6;
    let priceAllSneakers = numSneakers * pricePerSneakers;
    let priceOtherEquipment = (priceAllRockets + priceAllSneakers)*0.2;
    let totalPrice = priceAllRockets + priceAllSneakers + priceOtherEquipment;
    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice/8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice*(7/8))}`);
}
