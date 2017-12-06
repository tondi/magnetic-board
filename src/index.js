import angular from 'angular';
import ngSanitize from 'angular-sanitize';

/* Components */
import {loginComponent} from './app/components/login/login.component';
import {boardComponent} from './app/components/board/board.component';
import {noteComponent} from './app/components/note/note.component';

/* Services */
import {DragService} from './app/services/drag';
import {HighlightService} from './app/services/highlight/highlight.service';
import {DataService} from './app/services/data/data.service';

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
  .factory('data', ['$http', '$log', ($http, $log) => new DataService($http, $log)])
  .directive('resize', () => new ResizeDirective())
  .component('login', loginComponent)
  .component('board', boardComponent)
  .component('note', noteComponent);
