const fs = require("fs");

let lowerBound = 500000;
let upperBound = 1000000;
let minPoint = 0;
let maxPoint = 50000;
let nArchivos = 60;
let url = "";
for (let i = 0; i < nArchivos; i++) {
    let texto = ""
    url = "./Datos/datos_";
    let nPoints = getRandomNumber(lowerBound, upperBound);
    for (let j = 0; j < nPoints; j++) {
        x = getRandomNumber(minPoint, maxPoint);
        y = getRandomNumber(minPoint, maxPoint);
        z = getRandomNumber(minPoint, maxPoint);
        let point = [x, y, z];
        texto += `${point}\n`;
    }
    url += `${i + 1}`;
    let writeStream = fs.createWriteStream(url);
    writeStream.write(texto);
    writeStream.on('finish', () => {
        console.log('wrote all data to file');
    });
    writeStream.end();
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}