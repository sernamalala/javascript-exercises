const getTheTitles = function(arr) {
let newArr = [];
    arr.forEach(element => {

        newArr.push(element.title)
        
    });

    return newArr
};

// Do not edit below this line
module.exports = getTheTitles;
// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
// console.log(getTheTitles(books))