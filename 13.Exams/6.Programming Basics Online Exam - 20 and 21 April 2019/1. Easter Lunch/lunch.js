function easterLunch (input){
    let numEasterBread = Number(input[0]);
    let numPacksEggs = Number(input[1]);
    let kgCookies = Number(input[2]);

    let priceEasterBread = 3.2;
    let priceEggsPacksOf12Eggs = 4.35;
    let priceCookiesPerKg = 5.4;
    let paintEggs = 0.15;

    let easterBreads = numEasterBread * priceEasterBread;
    let eggs = numPacksEggs * priceEggsPacksOf12Eggs;
    let cookies = kgCookies * priceCookiesPerKg
    let paint = numPacksEggs * 12 * paintEggs;
    let total = easterBreads + eggs + cookies + paint;
    console.log(total.toFixed(2))
}
