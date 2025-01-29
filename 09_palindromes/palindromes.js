const palindromes = function (val) {

    
    let word = val.toLowerCase().replace(/[^a-z0-9]/g,"");

    return word.split("").reverse().join("")==word;
};

// Do not edit below this line
module.exports = palindromes;

// console.log(palindromes('serna'))