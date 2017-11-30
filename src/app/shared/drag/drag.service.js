class DragService {
  constructor($element, $log) {
    this.$log = $log;
    $element.bind('mousedown', this.onTouchStart);
  }

  onTouchStart() {
    this.$log.log('darg directive fired');
  }

  static DragServiceFactory($element, $log) {
    return new DragService($element, $log);
  }
}

// DragService.DragServiceFactory.$inject = ['$element', '$log'];

export {DragService};
