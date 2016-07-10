import template from './users-list.html'

export let UsersListComponent = {
  template,
  bindings: {
    users: '<'
  },
  controller:
class UsersListCtrl {
  /* @ngInject */
  constructor (UsersService) {
    this.UsersService = UsersService
    this.user_statuses = {
      active: 'Active',
      banned: 'Banned',
      deleted: 'Deleted'
    }
  }

  onFilterChange (filter_type, value) {
    this.UsersService.getUsers(value).then(users => this.users = users)
  }
}
}
