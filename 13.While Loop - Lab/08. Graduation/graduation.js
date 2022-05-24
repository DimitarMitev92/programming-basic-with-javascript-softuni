function graduation(input){
    let index = 0;
    let name = input[index];
    index++;

    let i=1; // В КОЙ КЛАС Е 
    let badGradeCounter = 0; // БРОЯЧ НА ЛОШО ОЦЕНКИ
    let sumGrade=0; // СУМА НА ОЦЕНКИТЕ
    let isExcluded = false;  // BOOLIEN - ДАЛИ Е СКЪСАН
    while(i <= 12){
        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade < 4){
            badGradeCounter++;
            if(badGradeCounter >= 2){
                isExcluded= true;
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue;
        }
        sumGrade+=tempGrade;
        i++;
        }
        if(!isExcluded){
        avrg = sumGrade /12;
        console.log(`${name} graduated. Average grade: ${avrg.toFixed(2)}`);
    }
}
