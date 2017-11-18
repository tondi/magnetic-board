// import {note} from '../../shared/note/note';

export const board = {
  template: require('./board.html'),
  controller($scope, $log, $compile) {
    this.hello = 'Hello Board!';
    $scope.add = function () {
      const el = $compile('<note></note>')($scope);
      // eslint-disable-next-line
      angular.element(document.querySelector('.board')).append(el);
      // $log.log(notes);
    };
    $scope.$on('note/clicked', (e, data) => {
      const element = data.el[0];
      $log.log(element.parentElement);
      element.parentElement.appendChild(element);
    });
  }
};
