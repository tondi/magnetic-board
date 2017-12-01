class NoteController {
  constructor($scope, $element, $log, DragService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$log = $log;

    this.dragService = DragService;
    this.dragService.init($element);
  }
  remove() {
    this.$element.remove();
    this.$scope.$emit('note/remove', {});
  }
}

NoteController.$inject = ['$scope', '$element', '$log', 'drag'];

export {NoteController};
