export const catalog = (foodArray) => {
    // iterate the array to add html formating to each object
    const mainElement = document.querySelector('main.container')
    let html = ''

    for (const food of foodArray) {
        html += `<div class="food-item">${food.type}</div>`
    }

    mainElement.innerHTML = html
} 
