import {BoardController} from './board.controller';

export const boardComponent = {
  template: require('./board.view.html'),
  controller: BoardController,
  controllerAs: 'BoardController'
};
