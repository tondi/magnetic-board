class loginController {
  constructor($log, $state) {
    this.log = $log;
    this.state = $state;

    this.name = '';
    this.hello = 'hello man';
  }
  login() {
    this.log.log(this.name);
    this.state.go('board');
  }
}

export {loginController};
