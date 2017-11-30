class boardController {
  constructor($scope, $log, $compile) {
    this.$scope = $scope;
    this.compile = $compile;
    this.notesCount = 0;

    $scope.$on('note/clicked', (e, data) => {
      const element = data.el[0];
      element.parentElement.appendChild(element);
    });
  }

  /* implementations details */

  add() {
    const el = this.compile('<note></note>')(this.$scope);
    // eslint-disable-next-line
    angular.element(document.querySelector('.board')).append(el);
    this.notesCount++;
  }

}

export {boardController};
