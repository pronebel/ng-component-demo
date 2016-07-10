import template from './select.html'

export let FilterSelectComponent = {
  template,
  bindings: {
    initial: '<',
    choices: '<',
    onChange: '&'
  },
  controller:
class FilterSelectCtrl {
  /* @ngInject */
  constructor () {
    this.selectedValue = this.initial
  }
}
}
