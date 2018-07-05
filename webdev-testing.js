function BetterDate(date) {
  this.now = new Date(date);
  this.getDay = function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = this.now.getDay();
    return days[day];
  };
}

module.exports = BetterDate;