function examPreparation (input){
    let index=0;
    let negativeGrade = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let countNegativeGrade = 0;
    let isNeededBreak = false;
    let sumGrades = 0;
    let counter = 0;
    let lastTask = "";

    while(command !== "Enough"){
        let currentTask = command;
        let currentGrade = Number(input[index]);
        index++;
        if(currentGrade <= 4){
            countNegativeGrade++;
        }
        if(countNegativeGrade === negativeGrade){
            isNeededBreak = true;
            console.log(`You need a break, ${countNegativeGrade} poor grades.`);
            break;
        }
        sumGrades += currentGrade;
        counter++;
        lastTask=currentTask;
        command=input[index];
        index++;
    }
    if(!isNeededBreak){
        let avrgGrade = sumGrades / counter;
        console.log(`Average score: ${avrgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
