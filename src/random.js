// Returns a random item from the array.
function choice (arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

// Returns a random integer between 0 and the max index.
// function randomInteger (maxNum) {
//     return Math.floor(Math.random() * maxNum) + 1;
// }

export { choice };
// export { choice, randomInteger };