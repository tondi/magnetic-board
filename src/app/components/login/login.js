export const login = {
  template: require('./login.html'),
  controller($scope, $log, $state) {
    this.hello = 'Board name';
    this.name = '';

    $scope.login = function () {
      $log.log(this.name);
      $state.go('board');
    };
  }
};
