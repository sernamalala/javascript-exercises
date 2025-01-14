const removeFromArray = function (arrayInput, element) {

    let newArray = [];
    if (arrayInput.includes(element)) {
        for (const singleElement of arrayInput) {
            if (singleElement !== element) {
                newArray.push(singleElement);
            }
        }
    }
    return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
