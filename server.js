const express = require('express');
const app = express();

app.use(express.json());

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    // let's not use eval(firstNum + secondNum)
    if (operator === 'add') return precision(firstNum + secondNum);
    if (operator === 'subtract') return precision(firstNum - secondNum);
    if (operator === 'multiply') return precision(firstNum * secondNum);
    if (operator === 'divide') return precision(firstNum / secondNum);
};

const precision = (result) => {
    return Math.round(1000000000000 * result) / 1000000000000;
};

// entrypoint for calculations
app.get('/', (req, res) => {
    // let operation = 4;
    let n1 = req.query.n1;
    let n2 = req.query.n2;
    let operator = req.query.operator;

    let operation = calculate(n1, operator, n2);
    // let u = [];
    // if (req.query.firstname == 'y') {
    //     u.push(faker.name.firstName());
    // }
    // if (req.query.lastname == 'y') {
    //     u.push(faker.name.lastName());
    // }
    // users.addUser(u);
    return res.json(operation);
    // return res.end(operation.toString());
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
