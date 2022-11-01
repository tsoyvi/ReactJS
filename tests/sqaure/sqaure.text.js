const square = require('./sqaure');

describe('square', () => {

    test('Корректное значение', () => {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
    })

    test('Корректное значение_1', () => {

        const MathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(MathPow).toBeCalledTimes(0)
    })
})