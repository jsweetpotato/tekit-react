<<<<<<< HEAD
function getRandomMinMax(min, max) {
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * (max - min) + min) + 1;
}
var result1 = getRandomMinMax();
console.log(result1);
var result2 = getRandomMinMax(10, 200);
=======
function getRandomMinMax(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min) + 1;
}
const result1 = getRandomMinMax();
console.log(result1);
const result2 = getRandomMinMax(10, 200);
>>>>>>> lecture
console.log(result2);
