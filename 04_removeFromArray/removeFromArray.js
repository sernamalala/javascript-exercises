const removeFromArray = function (arrayInput, ...elementsInputs) {

    let newArray = [];

    for (const singleElement of arrayInput) {
        if (!elementsInputs.includes(singleElement)) {
            newArray.push(singleElement);
        }
    }
    return newArray;
}


console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
