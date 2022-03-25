function suppliesForSchool(input) {
    const broiHimikali = Number(input[0]);
    const broiMarkeri = Number(input[1]);
    const litriPreparat = Number(input[2]);
    const procent = Number(input[3]);

    let allHimikali = broiHimikali * 5.8;
    let allMarkeri = broiMarkeri * 7.2;
    let allPreparat = litriPreparat * 1.2;
    let all = allHimikali + allMarkeri + allPreparat;
    let final = all - (all *(procent /100));
    console.log(final);
}
