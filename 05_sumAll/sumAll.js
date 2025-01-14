const sumAll = function (num1, num2) {

    let total = 0;
    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    return total;
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
