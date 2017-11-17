export const board = {
  template: require('./board.html'),
  controller($scope, $log, $compile) {
    this.hello = 'Hello Board!';
    const notes = [];
    $scope.add = function () {
      $log.log('add new note');
      const el = $compile('<note></note>')($scope);
      // eslint-disable-next-line
      angular.element(document.querySelector('.board')).append(el);
      // $log.log(notes);
      notes.push(el);

      $scope.$on('note/clicked', (e, data) => {
        // notes.push(data.el);
        const index = notes.indexOf(data.el);
        notes.push(notes.splice(index, 1));
        $log.log(notes);
      });
    };
  }
};
