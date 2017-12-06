class BoardController {
  constructor($scope, $log, $compile, DataService) {
    this.$scope = $scope;
    this.$log = $log;
    this.compile = $compile;
    this.DataService = DataService;

    this.notesCount = 0;
    this.operationsCount = 0;
    this.notes = null;

    // $scope.$on('note/click', (e, data) => {
    // });

    $scope.$on('note/remove', () => {
      this.notesCount--;
    });
  }

  $onInit() {
    this.DataService.fetchNotes().then(result => {
      // this.renderNotes(result.data);
      this.notes = result.data;
    });
  }

  // renderNotes(notes) {
  //   this.nodes = notes;
  //   this.$log.log('Setting notes, now:', this.notes);
  // }

  add() {
    const el = this.compile('<note resize></note>')(this.$scope);
    // eslint-disable-next-line
    angular.element(document.querySelector('.board')).append(el);
    this.notesCount++;
    this.operationsCount++;
  }
}

BoardController.$inject = ['$scope', '$log', '$compile', 'data'];

export {BoardController};
