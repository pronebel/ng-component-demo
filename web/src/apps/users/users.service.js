
export default class UsersService {
  /* @ngInject */
  constructor ($http) {
    this.$http = $http
  }

  getUsers (status = null) {
    return this.$http.get('/api/users?status=' + status).then(response => response.data)
  }
}
