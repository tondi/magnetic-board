class ResizeDirective {
  constructor($log) {
    this.$log = $log;
    this.restrict = 'EA';
  }

  controller($scope, $state, $log) {
    $scope.state = $state;

    $log.log('state', 'xx');
    $scope.$onInit = () => {
    };
  }

  link(scope, element, attrs) {

    // this.$log.log('state', scope.state);
    // this.$log.log('service', scope.service);
  }
}

export {ResizeDirective};
