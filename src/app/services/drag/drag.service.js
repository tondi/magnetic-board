class DragService {
  constructor($log, $document, $window, HighlightService) {
    this.$log = $log;
    this.$document = $document;
    this.$window = $window;

    this.highlightService = HighlightService;
  }

  init(el) {
    const contentEl = angular.element(el[0].querySelector('.note'));

    this.highlightService.highlight(el);

    const initialTransform = el.css('transform');
    const regex = /(-*\d*)px.*-*\d*px/g;
    const result = regex.exec(initialTransform);
    // this.$log.log('dragSrv transorms', initialTransform, result);
    let x = result[0].split('p')[0];
    let y = result[1].split('p')[0];

    let startX = 0;
    let startY = 0;

    el.css({
      position: 'absolute',
      cursor: 'pointer'
    });

    contentEl.on('mousedown', event => {
      el[0].parentElement.appendChild(el[0]);

      this.highlightService.highlight(el);

      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      this.$document.on('mousemove', mousemove);
      this.$document.on('mouseup', mouseup);
    });

    const mousemove = event => {
      y = event.pageY - startY;
      x = event.pageX - startX;
      el.css({
        transform: `translate(${x}px, ${y}px)`
      });
    };

    const mouseup = () => {
      this.$document.off('mousemove', mousemove);
      this.$document.off('mouseup', mouseup);
    };

    contentEl.on('touchstart', event => {
      el[0].parentElement.appendChild(el[0]);

      this.highlightService.highlight(el);

      event.preventDefault();
      startX = event.changedTouches[0].pageX - x;
      startY = event.changedTouches[0].pageY - y;
      this.$document.on('touchmove', touchmove);
      this.$document.on('touchend', touchend);
    });

    const touchmove = event => {
      y = event.changedTouches[0].pageY - startY;
      x = event.changedTouches[0].pageX - startX;
      el.css({
        transform: `translate(${x}px, ${y}px)`
      });
    };

    const touchend = () => {
      this.$document.off('touchmove', touchmove);
      this.$document.off('touchend', touchend);
    };
  }
}

DragService.$inject = ['$log', '$document', '$window', 'highlight'];

export {DragService};
