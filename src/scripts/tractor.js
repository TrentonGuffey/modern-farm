import { createPotato } from "./seeds/potato.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"

export const plantSeeds = (plantingPlan) => {
    // iterate over each row in the planting plan
    for (let row of plantingPlan) {
        // iterate over each food type in the row
        for (let foodType of row) {
            let seed
            //invoke the corresponding factory function based on the food type
            switch (foodType) {
                case 'Potato':
                seed = createPotato()
            break
                case 'Soybean':
                seed = createSoybean()
            break
                case 'Sunflower':
                seed = createSunflower()
            break
                case 'Wheat':
                seed = createWheat()
            break
                case 'Asparagus':
                seed = createAsparagus()
            break
                case 'Corn':
                seed = createCorn()
            }
            // add the seed to the array of plants in the row
            addPlant(seed)
        }
    }
    return usePlants()
}


