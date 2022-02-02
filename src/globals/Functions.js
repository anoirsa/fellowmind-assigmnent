
// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

// eslint-disable-next-line no-extend-native
Date.prototype.setFormat = function(h) {
    var minutes = this.getMinutes().toString() 
                    === "0" ? "00" : "30"; 
    const strgified = this.getHours()+":"+minutes;
    return strgified;
}

export const getTimeTable = () => {
    let timesOfDay = [];
    let sevenHalf = new Date(2016, 3, 3, 7, 30);
    for (let i = 0 ; i < 14 ; i ++) {
        timesOfDay.push(sevenHalf.setFormat())
        sevenHalf.addHours(0.5)
    }
    return timesOfDay;
}

export const reformDate = (date) => {
    const WEEK_DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAT", "THURSDAY", "FRIDAY", "SATURDAY"]
    return WEEK_DAYS[date.getDay()] +","+
    date.getDate()+"."+
    date.getMonth()+"."+date.getYear();
}