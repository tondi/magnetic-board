export const note = {
  template: require('./note.html'),
  controller($scope, $element, $document) {
    const element = $element;

    const style = {
      'z-index': 0
    };
    // https://docs.angularjs.org/guide/directive
    let startX = 0;
    let startY = 0;
    let x = 0;
    let y = 0;

    element.css({
      position: 'absolute',
      cursor: 'pointer'
    });

    element.on('mousedown', event => {
      style['z-index'] += 1;
      $element.css(style);
      $scope.$emit('note/clicked', {el: $element});

      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;

      // $log.log($element.style.zIndex);

      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;
      element.css({
        transform: `translate(${x}px, ${y}px)`
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  }
};
