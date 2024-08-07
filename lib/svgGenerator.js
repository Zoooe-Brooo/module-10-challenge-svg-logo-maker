const { Circle, Triangle, Square } = require('./shapes');

const createSVG = ({ text, textColor, shape, shapeColor }) => {
    const shapeObj = {
        circle: new Circle(),
        triangle: new Triangle(),
        square: new Square()
    }[shape];

    shapeObj.setColor(shapeColor);

    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObj.render()}
        <text x="150" y="125" font-family="San-serif" font-size="30" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
};

module.exports = { createSVG };