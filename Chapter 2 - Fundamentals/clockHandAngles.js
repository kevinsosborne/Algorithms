// Regardless of how hard a Dojo student works (they should work hard), they need time now and then to unwind - like hands on a clock. Traditional clocks are increasingly uncommon, but more can still read an analog clock's hands of hours, minutes, and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minutes and seconds hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs."

function clockHandAngles(seconds){
    var secondHandDegrees = Math.trunc((seconds / 60 * 360) % 360);
    var minutes = seconds/60;
    var minuteHandDegrees = Math.trunc((minutes / 60 * 360) % 360);
    var hours = minutes / 60;
    var hourHandDegrees = Math.trunc((hours / 12 * 360) % 360);
    
    console.log("Hour Hand: " + hourHandDegrees + " degs. Minute Hand: " + minuteHandDegrees + " degs. Second Hand: " + secondHandDegrees + " degs.")
}

clockHandAngles(119730);
