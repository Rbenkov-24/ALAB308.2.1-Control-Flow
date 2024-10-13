//==================Part 1: Growing Pains===============


const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
let plants = 20;
const capacity = Math.floor(area / spacePerPlant);

//function to predict growth after a certain number of weeks
function predictGrowth(weeks) {
    let futurePlants = plants * Math.pow(2, weeks);
    let plantPercentage = (futurePlants / capacity) * 100;

    console.log(`after ${weeks} weeks: ${futurePlants} plants (${plantPercentage.toFixed(2)}% of capacity)`);

    if (plantPercentage > 80) {
        console.log("prune the plants.");
    } else if (plantPercentage > 50) {
        console.log("monitor the plant growth.");
    } else {
        console.log("you can plant more.");
    }
}

//test with 1, 2, and 3 weeks
predictGrowth(1);
predictGrowth(2);
predictGrowth(3);

//=============Part 2: Thinking Bigger============

let initialPlants = 100;
let growthWeeks = 10;
let newPlants = initialPlants * Math.pow(2, growthWeeks);
let requiredSpace = newPlants * spacePerPlant;//total space required for new plants
let newRadius = Math.sqrt(requiredSpace / PI);

console.log(`after ${growthWeeks} weeks, need ${requiredSpace.toFixed(2)} square meters.`);
console.log(`new garden radius should be ${newRadius.toFixed(2)} meters.`);

//=================Part 3: Errors in Judgement================

function checkPlantCapacity(startPlants, weeks) {
    try {
        let futurePlants = startPlants * Math.pow(2, weeks);
        let requiredSpace = futurePlants * spacePerPlant;

        if (requiredSpace > area) {
            throw new Error("plants need more space than the garden has!");
        } else {
            console.log(`garden can support ${futurePlants} plants.`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

//test with 100 plants
checkPlantCapacity(100, 10);