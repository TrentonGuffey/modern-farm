
export const harvestPlants = (plantsArray) => {
    const pickCrops = []
    // each plantObj needs to be added to the pickCrops
    // remember "Corn" is an array and has to be treated seperate then other objects in the array
    for (const plantObj of plantsArray) {
        if (plantObj.type === "Corn") {
            // you only want half of the corn to go to market
            for (let i = 0; i < (plantObj.output / 2); i++)
                pickCrops.push(plantObj)
        } else {
            for (let i = 0; i < plantObj.output; i++) {
                pickCrops.push(plantObj)
            }
        }
    }
    return pickCrops
}


