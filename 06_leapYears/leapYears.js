const leapYears = function (year) {

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true
    }
    else if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
        return true
    }
    return false
};
console.log(leapYears(1985))
// Do not edit below this line
module.exports = leapYears;
