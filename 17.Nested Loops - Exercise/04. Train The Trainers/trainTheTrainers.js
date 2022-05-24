function trainThetrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumGrade=0;
    let counter = 0;
    while (command !== "Finish") {
        let name = command;
        counter ++;
        let tempSumGrade = 0;
        for (let i = 0; i < people; i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempSumGrade+=tempGrade;
        }
        let tempAvgGrade = tempSumGrade / people;
        sumGrade+=tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
