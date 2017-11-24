import angular from 'angular';

import {loginComponent} from './app/components/login/login.component';
import {boardComponent} from './app/components/board/board.component';
import {noteComponent} from './app/components/note/note.component';
import {dragDirective} from './app/shared/drag';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .directive('dragDirective', dragDirective)
  .component('login', loginComponent)
  .component('board', boardComponent)
  .component('note', noteComponent);
