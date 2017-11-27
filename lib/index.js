'use strict'

module.exports = (function () {
  const moment = require('moment-timezone')
  const Cron = require('cron-converter')

  const defaultTimeZone = 'America/Denver'

  class TimeWindow {
    constructor (cronSpec, timeZone = defaultTimeZone) {
      this.timeZone = timeZone
      this.timeWindow = (new Cron().fromString(cronSpec))
    }

    inTimeWindow (time) {
      let now = (time || moment.tz(this.timeZone))
      let arr = this.timeWindow.toArray()
      let within = false

      within = arr[0].includes(now.minute())
      if (within) within = arr[1].includes(now.hour())
      if (within) within = arr[2].includes(now.date())
      if (within) within = arr[3].includes(now.month() + 1)
      if (within) within = arr[4].includes(now.day())

      return within
    }
  }

  return TimeWindow
}())
