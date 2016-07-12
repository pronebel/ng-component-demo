import template from './demo_datepicker.html'

export let DemoDatepickerComponent = {
  template,
  bindings: {},
  controller:
class DemoDatepickerCtrl {
  /* @ngInject */
  constructor () {
    this.selectedDate = null
  }

  onDateChange (date) {
    this.selectedDate = date.format('YYYY-MM-DD')
  }
}
}
