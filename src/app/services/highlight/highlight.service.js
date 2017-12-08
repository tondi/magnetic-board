class HighlightService {
  constructor($log, $document, $window) {
    this.$log = $log;
    this.$document = $document;
    this.$window = $window;
    this.highlightedElement = null;
  }

  highlight(el) {
    if (this.highlightedElement) {
      this.highlightedElement.removeClass('note--highlighted');
    }
    this.highlightedElement = el;
    this.highlightedElement.addClass('note--highlighted');

    const onOutsideClick = e => {
      if (e.target !== this.highlightedElement[0]) {
        this.highlightedElement.removeClass('note--highlighted');
        this.$window.removeEventListener('click', onOutsideClick);
      }
    };
    this.$window.addEventListener('click', onOutsideClick);
  }
}

export {HighlightService};
