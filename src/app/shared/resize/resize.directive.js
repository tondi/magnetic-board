class ResizeDirective {
  constructor() {
    this.restrict = 'EA';
  }

  controller($document, $log, $element) {
    // const resizeElements = $element[0].querySelector('.note__resize');
    // resizeElements.addEventListener('click', e => {
    //   $log.log('resize', $element);
    // });

    const contentEl = angular.element($element[0].querySelector('.note__resize'));
    const el = angular.element($element[0].querySelector('.note'));

    let startWidth;
    let startHeight;
    let startX = 0;
    let startY = 0;
    let x = 0;
    let y = 0;

    contentEl.on('mousedown', event => {
      event.preventDefault();
      startWidth = el[0].getBoundingClientRect().width;
      startHeight = el[0].getBoundingClientRect().height;
      startX = event.pageX;
      startY = event.pageY;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    const mousemove = event => {
      y = event.pageY - startY;
      x = event.pageX - startX;
      el.css({
        width: `${(2 * x) + startWidth}px`,
        height: `${(2 * y) + startHeight}px`
      });
      // elParent.css({
        // transform: `translate(${x / 1}px, ${x / 1}px)`
      // });
    };

    const mouseup = () => {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    };

    contentEl.on('touchstart', event => {
      event.preventDefault();
      startWidth = el[0].getBoundingClientRect().width;
      startHeight = el[0].getBoundingClientRect().height;
      startX = event.changedTouches[0].pageX;
      startY = event.changedTouches[0].pageY;
      $document.on('touchmove', touchmove);
      $document.on('touchend', touchend);
    });

    const touchmove = event => {
      y = event.changedTouches[0].pageY - startY;
      x = event.changedTouches[0].pageX - startX;
      el.css({
        width: `${(2 * x) + startWidth}px`,
        height: `${(2 * y) + startHeight}px`
      });
    };

    const touchend = () => {
      $document.off('touchmove', touchmove);
      $document.off('touchend', touchend);
    };
  }
}
// link($scope, $state, $log, $element) {
//
//   // $log.log('state', scope.state);
//   // $log.log('service', scope.service);
// }


export {ResizeDirective};
