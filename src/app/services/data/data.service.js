class DataService {
  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
    this.boardId = undefined;
  }

  setBoardId(id) {
    this.boardId = id;
    this.$log.log('Setting board id: ', this.boardId);
  }

  getBoard(name) {
    const params = {
      params: {
        name
      }
    };

    return this.$http.get('http://localhost/magnetic-board-server/board/get.php', params).then(result => {
      return new Promise((resolve, reject) => {
        if (result.data.id) {
          this.$log.log('Board found', result);
          resolve(result);
        }
        else {
          this.$log.log('Board not found', result);
          reject(result);
        }
      });
    });
  }

  createBoard(name) {
    const params = {
      params: {
        name
      }
    };

    return this.$http.get('http://localhost/magnetic-board-server/board/add.php', params).then(result => {
      return new Promise((resolve, reject) => {
        if (result.data.status === 'OK') {
          this.$log.log('Board created', result);
          resolve(result);
        }
        else {
          this.$log.log('Board not created', result);
          reject(result);
        }
      });
    });
  }
}

export {DataService};
