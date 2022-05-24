function grades (input){
    index=0;
    let numStudents = Number(input[index]);
    index++;

    let counter2to3 = 0;
    let counter3to4 = 0;
    let counter4to5 = 0;
    let counter6 = 0;
    let sumGrades=0;

    for(let i = 1; i<= numStudents; i++){
        let currentGrade = Number(input[index]);
        index++;
        if(currentGrade >=2 && currentGrade <= 2.99){
            sumGrades+=currentGrade;
            counter2to3++;
        }else if( currentGrade >=3.00 && currentGrade <=3.99){
            sumGrades+=currentGrade;
            counter3to4++;
        }else if ( currentGrade >=4.00 && currentGrade <=4.99){
            sumGrades+=currentGrade;
            counter4to5++;
        }else if (currentGrade >=5.00){
            sumGrades+=currentGrade;
            counter6++;
        }
    }
    let avgGrade = sumGrades/numStudents;
    let percentFail = (counter2to3/numStudents)*100;
    let percent3to4 = (counter3to4/numStudents)*100;
    let percent4to5 = (counter4to5/numStudents)*100;
    let percent6 = (counter6/numStudents)*100;

    console.log(`Top students: ${percent6.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent4to5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent3to4.toFixed(2)}%`);
    console.log(`Fail: ${percentFail.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}
