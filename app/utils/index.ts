export function randomIntFromInterval(min=0, max=10) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// split client and server util functions in different files!