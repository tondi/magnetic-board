class NoteController {
  constructor($scope, $element, $document, DragService) {
    'ngInject';
    this.dragService = DragService;
    this.dragService.init($element, $scope);

    // this.test = this.dragService.onTouchStart();
    // eslint-disable-next-line
    // console.log(this.test);
  }
}

NoteController.$inject = ['$scope', '$element', '$document', 'drag'];

export {NoteController};
