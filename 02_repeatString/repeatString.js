const repeatString = function (value, num) {


    let string = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            string += value;
        }
    }
    else {
        string = "ERROR";
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;
