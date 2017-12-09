class NoteController {
  constructor($scope, $element, $log, DragService, DataService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$log = $log;

    this.dragService = DragService;
    this.DataService = DataService;

    this.id = '';
    this.position = '';
    this.size = '';
    this.content = '';
  }

  $onInit() {
    this.setInitialValues();
    this.dragService.init(this.$element, this.id);
  }

  setInitialValues() {
    this.$log.log(this.id, this.position, this.size, this.content);
    const el = angular.element(this.$element[0].querySelector('.note'));
    el.css({
      width: `${this.size.x}px`,
      height: `${this.size.y}px`,
    });
    this.$element.css({
      transform: `translate(${this.position.x}px, ${this.position.y}px)`
    });
  }

  remove() {
    this.$element.remove();
    this.DataService.removeNote(this.id);
    this.$scope.$emit('note/remove', {id: this.id});
  }

  edit() {
    this.$log.log('click note edit', this, tinymce);
    this.dragService.setCurrentNoteId(this.id);
    tinymce.activeEditor.editorContainer.classList.add('visible');
    tinymce.activeEditor.setContent(this.content);
    this.$scope.$applyAsync();
  }
}

NoteController.$inject = ['$scope', '$element', '$log', 'drag', 'data'];

export {NoteController};
