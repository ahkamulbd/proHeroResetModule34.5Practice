const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",

  },
];

// Car One Display:

const carOneImgDiv = document.getElementById('car1-img-div');
const carOneImg = document.getElementById('car1-img');
// carOneImg.classList.add('img-fluid');
carOneImg.innerHTML = `
  <img src="${data[0].imageURL}" class ="img-fluid" alt="Car One">
`;
carOneImgDiv.appendChild(carOneImg);

const carOneNameElement = document.getElementById('car1-name');
const carOneName = data[0].name;
carOneNameElement.innerText = carOneName;

const carOneDetailElement = document.getElementById('car1-detail');
const carOneDetail = data[0].description;
carOneDetailElement.innerText = carOneDetail;

const carOnePriceElement = document.getElementById('car1-price');
const carOnePrice = data[0].price;
carOnePriceElement.innerText = carOnePrice;

// Car Two Display:

const carTwoImgDiv = document.getElementById('car2-img-div');
const carTwoImg = document.getElementById('car2-img');
// carOneImg.classList.add('img-fluid');
carTwoImg.innerHTML = `
  <img src="${data[1].imageURL}" class ="img-fluid" alt="Car Two">
`;
carTwoImgDiv.appendChild(carTwoImg);

const carTwoNameElement = document.getElementById('car2-name');
const carTwoName = data[1].name;
carTwoNameElement.innerText = carTwoName;

const carTwoDetailElement = document.getElementById('car2-detail');
const carTwoDetail = data[1].description;
carTwoDetailElement.innerText = carTwoDetail;

const carTwoPriceElement = document.getElementById('car2-price');
const carTwoPrice = data[1].price;
carTwoPriceElement.innerText = carTwoPrice;
