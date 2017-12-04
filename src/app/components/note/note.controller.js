class NoteController {
  constructor($scope, $element, $log, DragService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$log = $log;

    this.dragService = DragService;
    this.dragService.init($element);

    this.content = '<p>What needs to be done?</p>';
  }
  remove() {
    this.$element.remove();
    this.$scope.$emit('note/remove', {});
  }
  edit() {
    tinymce.init({
      selector: '.board__tinymce',
      branding: false,
      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright ' +
      'alignjustify  | numlist bullist outdent indent  | removeformat | fullpage | code | confirm | cancel',
      resize: true,
      setup: editor => {
        editor.addButton('confirm', {
          icon: 'confirm',
          onclick: () => {
            this.content = tinymce.activeEditor.getContent();
            // refresh
            this.$scope.$apply();
            tinymce.remove();
          }
        });
        editor.addButton('cancel', {
          icon: 'cancel',
          onclick: () => {
            tinymce.remove();
          }
        });
      }
    })
  }
}

NoteController.$inject = ['$scope', '$element', '$log', 'drag'];

export {NoteController};
