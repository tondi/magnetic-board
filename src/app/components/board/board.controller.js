class BoardController {
  constructor($scope, $log, $compile, DataService) {
    this.$scope = $scope;
    this.$log = $log;
    this.compile = $compile;
    this.DataService = DataService;

    this.notesCount = 0;
    this.operationsCount = this.DataService.operationsCount || 0;
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
      this.notesCount = this.notes.length;
      this.$log.log(this.notes);
    });
  }

  // renderNotes(notes) {
  //   this.nodes = notes;
  //   this.$log.log('Setting notes, now:', this.notes);
  // }

  add() {
    this.DataService.addNote({x: 0, y: 0}, {x: 100, y: 100}, '<p>test</p>').then(result => {
      const el = this.compile(`<note resize note-id="${result.data.id}" position="{x: 0, y: 0}" size="{x: 100, y: 100}" content=""></note>`)(this.$scope);
      // eslint-disable-next-line
      angular.element(document.querySelector('.board')).append(el);
      this.$log.log(el);
      this.notesCount++;
      this.operationsCount++;
    })
  }
}

BoardController.$inject = ['$scope', '$log', '$compile', 'data'];

export {BoardController};
