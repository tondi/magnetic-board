function boardController($scope, $log, $compile) {
  this.hello = 'Hello Board!';
  $scope.add = function () {
    const el = $compile('<note></note>')($scope);
    // eslint-disable-next-line
    angular.element(document.querySelector('.board')).append(el);
  };
  $scope.$on('note/clicked', (e, data) => {
    const element = data.el[0];
    element.parentElement.appendChild(element);
  });
}

export {boardController};
