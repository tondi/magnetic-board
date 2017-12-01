import angular from 'angular';

import {loginComponent} from './app/components/login/login.component';
import {boardComponent} from './app/components/board/board.component';
import {noteComponent} from './app/components/note/note.component';
import {DragService} from './app/shared/drag';
import {HighlightService} from './app/shared/highlight/highlight.service';

import 'angular-ui-router';

import routesConfig from './routes';
import './index.scss';
export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .service('drag', DragService)
  .service('highlight', HighlightService)
  .component('login', loginComponent)
  .component('board', boardComponent)
  .component('note', noteComponent);
