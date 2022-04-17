function secretDoorsLock(input) {
    let theUpperLimitOfHundreds = Number(input[0]);
    let theUpperLimitOfTens = Number(input[1]);
    let theUpperLimitOfTheUnits = Number(input[2]);

    for (let a = 1; a <= theUpperLimitOfHundreds; a++) {
        for (let b = 1; b <= theUpperLimitOfTens; b++) {
            for (let c = 1; c <= theUpperLimitOfTheUnits; c++) {
                if (a % 2 === 0) {
                    if ((a + c) % 2 === 0) {
                        if (b == 2 || b == 3 || b == 5 || b == 7) {
                            console.log(`${a} ${b} ${c}`);
                        }
                    }
                }
            }
        }
    }
}
