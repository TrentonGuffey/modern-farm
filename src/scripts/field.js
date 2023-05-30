let growingPlants = [] // this variable stores all the plants growing in the field

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        growingPlants.push(...seedObj)
        // if true split array into individual objects
    } else {
        growingPlants.push(seedObj)
        
    }

}

export const usePlants = () => {

    return growingPlants
}

