class DragService {
  constructor($log) {
    this.$log = $log;
    // $element.bind('mousedown', this.onTouchStart);
  }

  onTouchStart() {
    this.$log.log('darg srv fired');
  }

  // static DragServiceFactory($element, $log) {
  //   return new DragService($element, $log);
  // }
}

// DragService.$inject = ['$element', '$log'];

export {DragService};
