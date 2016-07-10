import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import { UsersComponent } from './users.component'

import Components from './components'

import UsersListComponent from './users-list'
import UsersCreateComponent from './users-create'

export default angular
  .module('app_users', [
    uiRouter,
    Components,
    UsersListComponent,
    UsersCreateComponent
  ])
  .config(config)
  .component('app', UsersComponent)

/* @ngInject */
function config ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('list', {
      url: '/',
      component: UsersListComponent,
      resolve: {
        users: UsersService => UsersService.getUsers()
      }
    })
    .state('create', {
      url: '/create',
      component: UsersCreateComponent,
      resolve: {}
    })
}
