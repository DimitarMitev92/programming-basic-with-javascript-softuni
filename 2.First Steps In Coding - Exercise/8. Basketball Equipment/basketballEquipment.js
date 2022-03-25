function basketballEquipment (input){
    const yearTaks = Number(input[0]);
    const basketballShoes = yearTaks - yearTaks*0.4;
    const basketballSuit = basketballShoes - basketballShoes*0.2;
    const basketBall = (1/4) * basketballSuit;
    const basketballAcsesiores = (1/5) * basketBall;
    let totalEquipment = yearTaks + basketballShoes + basketballSuit + basketBall + basketballAcsesiores;
    console.log(totalEquipment);
}
