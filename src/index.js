import angular from 'angular';

import {login} from './app/components/login/login';
import {board} from './app/components/board/board';
import {noteComponent} from './app/components/note/note.component';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('login', login)
  .component('board', board)
  .component('note', noteComponent);
