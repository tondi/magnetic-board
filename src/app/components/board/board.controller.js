class BoardController {
  constructor($scope, $log, $compile, DataService, DragService) {
    this.$scope = $scope;
    this.$log = $log;
    this.compile = $compile;
    this.DataService = DataService;
    this.DragService = DragService;

    this.notesCount = 0;
    this.operationsCount = this.DataService.operationsCount || 0;
    this.notes = null;

    $scope.$on('note/remove', (e, data) => {
      const noteToRemove = this.notes.find(el => el.id === data.id);
      const index = this.notes.indexOf(noteToRemove);
      this.notes.splice(index, 1);
      this.notesCount--;
    });
    $scope.$on('note/highlight', el => {
      this.$log.log(el);
    });
  }

  $onInit() {
    this.DataService.fetchNotes().then(result => {
      // this.renderNotes(result.data);
      this.notes = result.data;
      this.notesCount = this.notes.length;
    });
    this.initTinyMCE();
  }

  initTinyMCE() {
    tinymce.init({
      selector: '#board__tinymce',
      branding: false,
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright ' +
      'alignjustify  | numlist bullist outdent indent  | removeformat | fullpage | code | confirm | cancel',
      resize: true,
      setup: editor => {
        editor.addButton('confirm', {
          icon: 'confirm',
          onclick: () => {
            const content = tinymce.activeEditor.getContent();
            const currentNote = this.notes.find(el => el.id === this.DragService.currentNoteId);
            currentNote.content = content;
            // refresh
            this.$scope.$apply();
            this.DataService.updateContent(this.DragService.currentNoteId, content);
            tinymce.activeEditor.editorContainer.classList.remove('visible');
          }
        });
        editor.addButton('cancel', {
          icon: 'cancel',
          onclick: () => {
            tinymce.activeEditor.editorContainer.classList.remove('visible');
          }
        });
      }
    });
  }

  addNote() {
    this.DataService.addNote({x: 0, y: 0}, {x: 100, y: 100}, '').then(result => {
      // const el = this.compile(`<note resize note-id="${result.data.id}" position="{x: 0, y: 0}" size="{x: 100, y: 100}" content=""></note>`)(this.$scope);
      // eslint-disable-next-line
      // angular.element(document.querySelector('.board')).append(el);
      // this.$log.log(this.notes);
      this.notes.push({
        id: result.data.id,
        position: {
          x: 0,
          y: 0
        },
        size: {
          x: 100,
          y: 100
        },
        content: ''
      });
      this.notesCount++;
      this.operationsCount++;
    })
  }

  $onDestroy() {
    tinymce.remove();
  }
}

BoardController.$inject = ['$scope', '$log', '$compile', 'data', 'drag'];

export {BoardController};
