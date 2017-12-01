class HighlightService {
  constructor($log, $document, $window) {
    this.$log = $log;
    this.$document = $document;
    this.$window = $window;
    this.highlightedElement = null;
  }

  highlight(el) {
    this.$log.log('srv', el);
    if (this.highlightedElement) {
      this.highlightedElement[0].classList.remove('note--highlighted');
    }
    this.highlightedElement = el;
    this.highlightedElement[0].classList.add('note--highlighted');

    const onOutsideClick = e => {
      if (e.target !== this.highlightedElement[0]) {
        this.highlightedElement[0].classList.remove('note--highlighted');
        this.$window.removeEventListener('click', onOutsideClick);
      }
    };
    this.$window.addEventListener('click', onOutsideClick);
  }
}

export {HighlightService};
