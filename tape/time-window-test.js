'use strict'

const test = require('tape')
const moment = require('moment-timezone')
const TimeWindow = require('../lib/index')

test('TimeWindow', (TC) => {
  TC.test('default timezone', (assert) => {
    let timeWindow = new TimeWindow('* * * * *')
    assert.true(timeWindow.inTimeWindow())
    assert.end()
  })

  TC.test('Denver TimeZone with demo range', (assert) => {
    // Any time during the 5PM hour
    let timeWindow = new TimeWindow('* 17 * * 4', 'America/Denver')
    assert.false(timeWindow.inTimeWindow(moment.tz('2017-11-27 12:59:00', 'America/Denver')))
    assert.false(timeWindow.inTimeWindow(moment.tz('2017-11-30 16:59:00', 'America/Denver')))
    assert.true(timeWindow.inTimeWindow(moment.tz('2017-11-30 17:00:00', 'America/Denver')))
    assert.true(timeWindow.inTimeWindow(moment.tz('2017-11-30 17:59:00', 'America/Denver')))
    assert.false(timeWindow.inTimeWindow(moment.tz('2017-11-30 18:00:00', 'America/Denver')))
    assert.end()
  })

  TC.test('All Fields', (assert) => {
    let timeWindow = new TimeWindow('1 2 3 4 1', 'America/Denver')
    assert.true(timeWindow.inTimeWindow(moment.tz('2017-04-03 02:01:00', 'America/Denver')))
    assert.end()
  })
})
