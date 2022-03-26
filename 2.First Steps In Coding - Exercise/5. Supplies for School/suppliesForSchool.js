function suppliesForSchool(input) {
    const numPens = Number(input[0]);
    const numMarkers = Number(input[1]);
    const litersPreparation = Number(input[2]);
    const percent = Number(input[3]);

    let totalPens = numPens * 5.8;
    let totalMarkers = numMarkers * 7.2;
    let totalPreparation = litersPreparation * 1.2;
    let all = totalPens + totalMarkers + totalPreparation;
    let finalSum = all - (all *(percent /100));
    console.log(finalSum);
}
