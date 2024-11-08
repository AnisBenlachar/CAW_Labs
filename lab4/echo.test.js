// echo.test.js
const exf = require('./echo');

describe('exf function', () => {
    it('logs the correct message the specified number of times', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        
        exf("echo", 5);
        expect(consoleSpy).toHaveBeenCalledTimes(5);
        expect(consoleSpy).toHaveBeenCalledWith("echo");

        consoleSpy.mockClear();

        exf("JS from server", 10);
        expect(consoleSpy).toHaveBeenCalledTimes(10);
        expect(consoleSpy).toHaveBeenCalledWith("JS from server");

        consoleSpy.mockRestore(); // Restore console.log after test
    });
});
