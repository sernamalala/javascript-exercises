const reverseString = function (input) {

    let newString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        newString += input[i];
    }
    return newString;

};

//console.log(reverseString("Serna Malala"))
// Do not edit below this line
module.exports = reverseString;
