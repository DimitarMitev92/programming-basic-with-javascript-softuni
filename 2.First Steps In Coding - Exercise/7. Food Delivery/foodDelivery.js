function foodDelivery (input){
    let numChickenMenus = Number(input[0]);
    let numFishMenus = Number(input[1]);
    let numVegieMenus = Number(input[2]);

    let allChickenMenus = numChickenMenus * 10.35;
    let allFishMenus = numFishMenus* 12.40;
    let allVegieMenus = numVegieMenus * 8.15;
    let allMenus = allChickenMenus + allFishMenus + allVegieMenus;
    let desert = allMenus * 0.2;
    let delivery = 2.50;
    let finalSum = allMenus + desert + delivery;
    console.log(finalSum);
}
