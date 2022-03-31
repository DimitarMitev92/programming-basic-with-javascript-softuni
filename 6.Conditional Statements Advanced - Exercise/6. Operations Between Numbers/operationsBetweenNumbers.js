function operationWithNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let evenOrOdd = 0;

    if (operator === "+") {
        if ((N1 + N2) % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${N1} ${operator} ${N2} = ${N1 + N2} - ${evenOrOdd}`);
    } else if (operator === "-") {
        if ((N1 - N2) % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${N1} ${operator} ${N2} = ${N1 - N2} - ${evenOrOdd}`);
    } else if (operator === "*") {
        if ((N1 * N2) % 2 === 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${N1} ${operator} ${N2} = ${N1 * N2} - ${evenOrOdd}`);
    } else if (operator === "/") {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            console.log(`${N1} ${operator} ${N2} = ${(N1 / N2).toFixed(2)}`);
        }
    } else if (operator === "%") {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            console.log(`${N1} ${operator} ${N2} = ${(N1 % N2)}`);
        }
    }
}
