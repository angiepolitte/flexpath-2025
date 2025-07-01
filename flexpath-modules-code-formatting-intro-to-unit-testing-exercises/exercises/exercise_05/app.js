// circle.js
function circleArea(radius) {
  return Math.PI * radius * radius;
}

function rectangleArea(width, height) {
  return width * height;
}

console.log(`Circle area: ${circleArea(5)}`); // Circle area: 78.53981633974483
console.log(`Rectangle area: ${rectangleArea(4, 6)}`); // Rectangle area: 24
