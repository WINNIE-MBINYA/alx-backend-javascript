describe('calculateNumber', function() {
    let expect;
    let calculateNumber;

    before(async function() {
        expect = (await import('chai')).expect;
        calculateNumber = (await import('./2-calcul_chai.js')).default;
    });

    it('should return 6 when type is SUM and inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when type is DIVIDE and inputs are 1.4 and 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
