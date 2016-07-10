import angular from 'angular'

import { UsersListComponent } from './users-list.component'

import FilterSelect from '../../components/filters/select'

import UsersService from './users.service'

export default angular
  .module('usersList', [
    FilterSelect
  ])
  .component('usersList', UsersListComponent)
  .service('UsersService', UsersService)
  .name
