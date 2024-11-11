
let hunger = 100;
let happiness = 100;
let energy = 100;

const petImage = document.getElementById("pet");
const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const energyBar = document.getElementById("energy-bar");

function updateBars() {
    hungerBar.value = hunger;
    happinessBar.value = happiness;
    energyBar.value = energy;
}

function feedPet() {
    if (hunger < 100) {
        hunger += 20;
        hunger = Math.min(hunger, 100); // Cap at 100
        petImage.src = "eating_dog.png"; // Image change to eating
        setTimeout(() => {
            petImage.src = "eating_dog.png";
        }, 4000); 
    }
    updateBars();
}

function playWithPet() {
    if (happiness < 100 && energy > 0) {
        happiness += 20;
        energy -= 10;
        happiness = Math.min(happiness, 100); // Cap at 100
        petImage.src = "play.png"; // Image change to playing
        setTimeout(() => {
            petImage.src = "happy.png";
        }, 4000); 
    }
    updateBars();
}

function putPetToSleep() {
    if (energy < 100) {
        energy += 30;
        hunger -= 10;
        energy = Math.min(energy, 100); // Cap at 100
        petImage.src = "sleep.png"; // Image change to sleeping
        setTimeout(() => {
            petImage.src = "happy.png";
        }, 4000); 
    }
    updateBars();
}

// Function to decrease attributes over time
function decreaseAttributes() {
    hunger -= 2;
    happiness -= 1;
    energy -= 1;

    // Constrain values to minimum of 0
    hunger = Math.max(hunger, 0);
    happiness = Math.max(happiness, 0);
    energy = Math.max(energy, 0);

    // Update pet mood based on happiness level
    if (hunger <= 20 || happiness <= 20 || energy <= 20) {
        petImage.src = "sad.png"; // Change pet image to sad state
    } else {
        petImage.src = "happy.png"; // Default happy state
    }

    updateBars();
}

// Decrease attributes every 3 seconds
 setInterval(decreaseAttributes, 4000);

// Initialize bars on load
updateBars();
