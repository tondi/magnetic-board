  class NoteController {
    constructor($scope, $element, $document) {
      this.element = $element;
    }

//   let startX = 0;
//   let startY = 0;
//   let x = 0;
//   let y = 0;
//
//   element.css({
//                 position: 'absolute',
//                 cursor: 'pointer'
//               });
//
//   element.on('mousedown', event => {
//   // Notes do not know about each other - handle it higher
//   $scope.$emit('note/clicked', {el: $element});
//
// // Prevent default dragging of selected content
// event.preventDefault();
// startX = event.pageX - x;
// startY = event.pageY - y;
//
// $document.on('mousemove', mousemove);
// $document.on('mouseup', mouseup);
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
//
// function touchend() {
//   $document.off('touchmove', touchmove);
//   $document.off('touchend', touchend);
// }
};

export {note};
