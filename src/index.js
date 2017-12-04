import angular from 'angular';
import ngSanitize from 'angular-sanitize';

/* Components */
import {loginComponent} from './app/components/login/login.component';
import {boardComponent} from './app/components/board/board.component';
import {noteComponent} from './app/components/note/note.component';

/* Services */
import {DragService} from './app/shared/drag';
import {HighlightService} from './app/shared/highlight/highlight.service';

/* Directives */
import {ResizeDirective} from './app/shared/resize/resize.directive';

/* Providers */
import {constants} from './app/shared/constants/constants';
import 'angular-ui-router';

import routesConfig from './routes';
import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngSanitize'])
  .config(routesConfig)
  .constant('constants', constants)
  .service('drag', DragService)
  .service('highlight', HighlightService)

  .directive('resize', () => new ResizeDirective())
  .component('login', loginComponent)
  .component('board', boardComponent)
  .component('note', noteComponent);

