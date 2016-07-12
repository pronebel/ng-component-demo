import template from './datepicker.html'

import moment from 'moment'

export let DatepickerComponent = {
  template,
  bindings: {
    minDate: '@',
    maxDate: '@',
    onChange: '&'
  },
  controller:
class DatepickerCtrl {
  /* @ngInject */
  constructor () {
    this._minDate = moment(this.minDate, 'YYYY.MM.DD')
    this._maxDate = moment(this.maxDate, 'YYYY.MM.DD')

    this.visible = false
    this.selectedDate = null
    this.daysOfWeek = ['Sa', 'Mo', 'Tu', 'We', 'Th', 'Fi', 'Su']
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    this.currentDate = moment()

    this.updateCalendar()
  }

  updateCalendar () {
    this.dates = this.makeDatesArray()
  }

  makeDatesArray () {
    let currentDate = moment(this.currentDate)
    let firstDay = currentDate.startOf('month').day()
    let lastDay = currentDate.endOf('month').day()
    let daysInMonth = currentDate.daysInMonth()

    let monthArray = []
    let weekArray = []

    for (let i = 0; i < firstDay + (6 - lastDay) + daysInMonth; i++) {
      let dayDate = {
        day: '',
        date: null,
        selected: false,
        disabled: true
      }

      let day = i - firstDay + 1
      if (day >= 1 && day <= daysInMonth) {
        dayDate.day = day
        dayDate.date = moment(currentDate.date(day))
        dayDate.disabled = false

        console.log(this._minDate, dayDate.date)

        if (this._maxDate && this._maxDate.isBefore(dayDate.date, 'day') ||
            this._minDate && this._minDate.isAfter(dayDate.date, 'day')) {
          dayDate.disabled = true
        }

        if (this.selectedDate && this.selectedDate.isSame(dayDate.date)) {
          dayDate.selected = true
        }
      }

      weekArray.push(dayDate)
      if ((i + 1) % 7 === 0) {
        monthArray.push(weekArray)
        weekArray = []
      }
    }
    return monthArray
  }

  toggle () {
    this.visible = !this.visible
  }

  nextMonth () {
    if (!this._maxDate || this._maxDate.isSameOrAfter(this.currentDate, 'month')) {
      this.currentDate.add(1, 'month')
      this.updateCalendar()
    }
  }

  prevMonth () {
    if (!this._minDate || this._minDate.isSameOrBefore(this.currentDate, 'month')) {
      this.currentDate.subtract(1, 'month')
      this.updateCalendar()
    }
  }

  selectDate (date) {
    if (!date.disabled) {
      this.selectedDate = date.date
      this.updateCalendar()
      this.onChange({value: date.date})
    }
  }

}
}
