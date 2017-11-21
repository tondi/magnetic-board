class NoteController {
  constructor($scope, $log) {
    this.$log = $log;
    this.$scope = $scope;
    // const element = $element;
    //
    // // NoteService.handleOnClick();
    //
    // // https://docs.angularjs.org/guide/directive
    // let startX = 0;
    // let startY = 0;
    // let x = 0;
    // let y = 0;
    //
    // element.css({
    //   position: 'absolute',
    //   cursor: 'pointer'
    // });
    //
    // element.on('mousedown', event => {
    //
    // });
    //
    // element.on('touchstart', event => {
    //   // Notes do not know about each other - handle it higher
    //   $scope.$emit('note/clicked', {el: $element});
    //
    //   // Prevent default dragging of selected content
    //   event.preventDefault();
    //   startX = event.changedTouches[0].pageX - x;
    //   startY = event.changedTouches[0].pageY - y;
    //   $document.on('touchmove', touchmove);
    //   $document.on('touchend', touchend);
    // });
    //
    // function mousemove(event) {
    //   y = event.pageY - startY;
    //   x = event.pageX - startX;
    //   element.css({
    //     transform: `translate(${x}px, ${y}px)`
    //   });
    // }
    //
    // function touchmove(event) {
    //   y = event.changedTouches[0].pageY - startY;
    //   x = event.changedTouches[0].pageX - startX;
    //   element.css({
    //     transform: `translate(${x}px, ${y}px)`
    //   });
    // }
    //
    // function mouseup() {
    //   $document.off('mousemove', mousemove);
    //   $document.off('mouseup', mouseup);
    // }
    // this.$log.log('xx');
    // Notes do not know about each other - handle it higher
    // $scope.$emit('note/clicked', {el: $element});
    //
    // function touchend() {
    //   $document.off('touchmove', touchmove);
    //   $document.off('touchend', touchend);
    // }
    // eslint-disable-next-line
    this.$scope.onMouseDown = () => console.log('xx kurwa');
  }
  $onInit() {
    // $log.log('xxx');
  }
  onMouseDown() {
    //
    // $log.log("clicked");
    //
    // // Prevent default dragging of selected content
    // event.preventDefault();
    // startX = event.pageX - x;
    // startY = event.pageY - y;
    //
    // $document.on('mousemove', mousemove);
    // $document.on('mouseup', mouseup);
  }
}

export {NoteController};
