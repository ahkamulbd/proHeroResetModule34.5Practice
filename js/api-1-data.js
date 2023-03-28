const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};

// Person One Display: 

const personOneElement = document.getElementById('person-one');
const personOne = person.result[0].name.common;
personOneElement.innerText = personOne;
//console.log(personOne);

const personOneAge = person.result[0].age;
const personOneAgeElement = document.getElementById('age-one');
personOneAgeElement.innerText = personOneAge;

const personOneStreet = person.result[0].address.street;
const personOneStreetElement = document.getElementById('street-one');
personOneStreetElement.innerText = personOneStreet;


// Person Two Display: 

const personTwoElement = document.getElementById('person-two');
const personTwo = person.result[1].name.common;
personTwoElement.innerText = personTwo;
//console.log(personOne);

const personTwoAge = person.result[1].age;
const personTwoAgeElement = document.getElementById('age-two');
personTwoAgeElement.innerText = personTwoAge;

const personTwoStreet = person.result[1].address.street;
const personTwoStreetElement = document.getElementById('street-two');
personTwoStreetElement.innerText = personTwoStreet;
//console.log(personTwoStreet);