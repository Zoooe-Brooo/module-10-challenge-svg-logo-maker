const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape', () => {
    describe('Circle', () => {
        test('Circle render method should return the correct SVG string', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
        });
    });
    describe('Triangle', () => {
        test('Triangle render method should return the correct SVG string', () => {
            const shape = new Triangle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="green" />');
        });
    });
    describe('Square', () => {
        test('Square render method should return the correct SVG string', () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
        });
    });
});
