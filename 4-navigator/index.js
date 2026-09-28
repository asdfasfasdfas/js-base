const positionLat = 10;
const positionLong = 15;
const addressLat = 20;
const addressLong = 30;

const deltaLat = addressLat - positionLat;
const deltaLong = addressLong - positionLong;
const distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2);
console.log(distance);
