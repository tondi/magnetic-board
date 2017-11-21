const dragDirective = () => {
  return {
    controller: ($scope, $element) => {
      $element.bind('touchstart', onTouchStart);

      function onTouchStart(event) {
        const method = $element.attr('ng-touchstart');
        $scope.$event = event;
        $scope.$apply(method);
      }
    }
  };
};

export {dragDirective};
