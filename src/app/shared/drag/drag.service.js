class DragService {
  constructor($log, $document) {
    this.$log = $log;
    this.$document = $document;
  }

  init(el, $scope) {
    this.el = el;
    this.scope = $scope;

    const element = this.el;
    let startX = 0;
    let startY = 0;
    let x = 0;
    let y = 0;

    element.css({
      position: 'absolute',
      cursor: 'pointer'
    });

    element.on('mousedown', event => {
      this.scope.$emit('note/clicked', {el});

      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      this.$document.on('mousemove', mousemove);
      this.$document.on('mouseup', mouseup);
    });

    const mousemove = event => {
      y = event.pageY - startY;
      x = event.pageX - startX;
      element.css({
        transform: `translate(${x}px, ${y}px)`
      });
    };

    const mouseup = () => {
      this.$document.off('mousemove', mousemove);
      this.$document.off('mouseup', mouseup);
    };

    element.on('touchstart', event => {
      this.scope.$emit('note/clicked', {el});

      event.preventDefault();
      startX = event.changedTouches[0].pageX - x;
      startY = event.changedTouches[0].pageY - y;
      this.$document.on('touchmove', touchmove);
      this.$document.on('touchend', touchend);
    });

    const touchmove = event => {
      y = event.changedTouches[0].pageY - startY;
      x = event.changedTouches[0].pageX - startX;
      element.css({
        transform: `translate(${x}px, ${y}px)`
      });
    };

    const touchend = () => {
      this.$document.off('touchmove', touchmove);
      this.$document.off('touchend', touchend);
    };
  }
}


// DragService.$inject = ['$element', '$log'];

export {DragService};
