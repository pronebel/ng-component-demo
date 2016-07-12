import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import { DemoDatepickerComponent } from './demo_datepicker.component'

import Datepicker from '../../components/datepicker'

export default angular
  .module('app_demo_datepicker', [
    uiRouter,
    Datepicker
  ])
  .config(config)
  .component('app', DemoDatepickerComponent)

/* @ngInject */
function config ($locationProvider, $stateProvider, $urlRouterProvider) {
}
