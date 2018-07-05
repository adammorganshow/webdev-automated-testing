let BetterDate = require('../webdev-testing');

describe('BetterDate', function() {
  it('should return the day of the week', function() {
    let betterDate = new BetterDate('05 Jul 2018');
    expect(betterDate.getDay()).toBe('Thursday');
  });
});