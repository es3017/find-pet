const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Appollo",
        breed: "German Shepard",
        age: 1
    },
    {
        dogName: "Lucky",
        breed: "Poodle",
        age: 8
    },
    {
        dogName: "Tom",
        breed: "Golden Retriever",
        age: 9
    },
];

const ageInput = document.getElementById("ageInput");
const findDogsButton = document.getElementById("findDogsButton");
const dogList = document.getElementById("dogList");

findDogsButton.addEventListener("click", findDogsByAge);

function findDogsByAge() {

    const minAge = parseInt(ageInput.value);

    const selectedDogs = [];

    allDogs.forEach(function(dog) {
        if (dog.age > minAge) {
            selectedDogs.push(dog);
        }
    });

    dogList.innerHTML = "";

    selectedDogs.forEach(function(dog) {
        const dogInfo = document.createElement("p");
        dogInfo.textContent = `Name: ${dog.dogName}, Breed: ${dog.breed}, Age: ${dog.age}`;
        dogList.appendChild(dogInfo);
    });
}
