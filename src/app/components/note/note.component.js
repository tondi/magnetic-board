import {NoteController} from './note.controller';

const noteComponent = {
  template: require('./note.view.html'),
  controller: NoteController,
  controllerAs: 'NoteController'
};

export {noteComponent};
