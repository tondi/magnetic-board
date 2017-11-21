// controller($scope, $element, $document) {

// import {NoteController} from './note.controller';

import {NoteController} from './note.controller';

const noteComponent = {
  template: require('./note.view.html'),
  controller: NoteController
  // controllerAs: 'noteController'
  // controller: ($scope, $log) => {
  //   $scope.onMouseDown = () => {
  //     $log.log('xxx');
  //   };
  // }
};

export {noteComponent};
