class NoteController {
  constructor($scope, $element, $log, DragService) {
    this.$element = $element;
    this.$scope = $scope;
    this.$log = $log;

    this.dragService = DragService;

    this.id = '';
    this.position = '';
    this.size = '';
    this.content = '';

    // this.content = '<p>What needs to be done?</p>';

    // this.link = attrs => {
    // this.$log.log('attrs', this.$attrs);
    // }
    // this.position = this.$attrs.position;
    // this.$log.log('this', this);
    // $timeout(() => {
    //   this.position = this.$attrs.position;
    //   this.$log.log('this.position', this.position);
    // }, 100);
  }

  $onInit() {
    this.setInitialValues();
    this.dragService.init(this.$element);
  }

  setInitialValues() {
    this.$log.log(this.id, this.position, this.size, this.content);
    const el = angular.element(this.$element[0].querySelector('.note'));
    el.css({
      width: `${this.size.x}px`,
      height: `${this.size.y}px`,
    });
    this.$element.css({
      transform: `translate(${this.position.x}px, ${this.position.x}px)`
    });
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
    });
  }
}

NoteController.$inject = ['$scope', '$element', '$log', 'drag'];

export {NoteController};
