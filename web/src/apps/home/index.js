import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import { HomeComponent } from './home.component'

import Datepicker from '../../components/datepicker'

export default angular
  .module('app_home', [
    uiRouter,
    Datepicker
  ])
  .config(config)
  .component('app', HomeComponent)

/* @ngInject */
function config ($locationProvider, $stateProvider, $urlRouterProvider) {
}
