import {ResizeController} from './resize.controller';

class ResizeDirective {
  constructor() {
    this.restrict = 'EA';
    this.controller = ResizeController;
  }
}

export {ResizeDirective}
