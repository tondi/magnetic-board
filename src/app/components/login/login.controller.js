class LoginController {
  constructor($log, $state, DataService) {
    this.$log = $log;
    this.$state = $state;
    this.DataService = DataService;

    this.name = '';
    this.hello = 'hello man';
  }
  login() {
    this.DataService.getBoard(this.name)
      .then(result => {
        this.DataService.setBoardId(result.data.id);
        this.$state.go('board');
      })
      .catch(() => {
        this.DataService.createBoard(this.name).then(() => {
          this.DataService.getBoard(this.name).then(result => {
            this.DataService.setBoardId(result.data.id);
            this.$state.go('board');
          })
          .catch(result => {
            throw new Error(result);
          });
        })
        .catch(result => {
          throw new Error(result);
        });
      });
  }
}

LoginController.$inject = ['$log', '$state', 'data'];

export {LoginController};
