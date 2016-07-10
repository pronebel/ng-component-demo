import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import { HomeComponent } from './home.component'

export default angular
  .module('app_home', [
    uiRouter
  ])
  .config(config)
  .component('app', HomeComponent)

/* @ngInject */
function config () {
}
