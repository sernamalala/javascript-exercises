const findTheOldest = function(persons) {

const date = new Date();

    let ages = [];
     persons.forEach((person) => {
        let age = 0;
        if(person.yearOfDeath){
            age = person.yearOfDeath-person.yearOfBirth;
        }
        else{
        age = date.getFullYear() - person.yearOfBirth;
        }
        ages.push(age);
        
     });
     let maxAgeIndex = ages.indexOf(Math.max(...ages));
     
     return persons[maxAgeIndex];

};

// Do not edit below this line
module.exports = findTheOldest;

//   const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1066,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]
//   console.log(findTheOldest(people))