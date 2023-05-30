import { catalog } from "./catalog.js"
import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan()
//console.log(yearlyPlan)
const planted = plantSeeds(yearlyPlan)
// const planted = usePlants()
//console.log(planted)
const foodToSell = harvestPlants(planted)
//console.log(foodToSell)
console.log(catalog(foodToSell))