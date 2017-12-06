class BoardController {
  constructor($scope, $log, $compile) {
    this.$scope = $scope;
    this.$log = $log;
    this.compile = $compile;
    this.notesCount = 0;
    this.operationsCount = 0;

    // $scope.$on('note/click', (e, data) => {
    // });

    $scope.$on('note/remove', () => {
      this.notesCount--;
    });
  }

  add() {
    const el = this.compile('<note resize></note>')(this.$scope);
    // eslint-disable-next-line
    angular.element(document.querySelector('.board')).append(el);
    this.notesCount++;
    this.operationsCount++;
  }
}

export {BoardController};
