# time-window

A simple tool to determine if a particular time is within 
a window of time. Uses a cron specification to define the
time window.

## Install

    npm install time-window --save

## Use

This usage assumes you are using nodejs.

    const TimeWindow = require('time-window')

    // Assume time zone of America/Denver
    // The window is the 5PM hour on Thursday
    let timeWindow = new TimeWindow('* 17 * * 4')

    if (timeWindow.inTimeWindow()) {
      console.log('Current time is in window!!')
    }

    // Specify the time zone you want
    // The window is the 8-9PM hours on Thursday
    let timeWindow = new TimeWindow('* 20-21 * * 4', 'America/Chicago')
    if (timeWindow.inTimeWIndow()) {
      console.log('Current Chicago time is in window!!')
    }

# License

This project uses the MIT license.
