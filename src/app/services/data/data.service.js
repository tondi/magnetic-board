class DataService {
  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
    this.boardId = '1';
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

    return this.$http.get('http://localhost/magnetic-board-server/board/read.php', params).then(result => {
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

  fetchNotes() {
    const params = {
      params: {
        id: this.boardId
      }
    };

    return this.$http.get('http://localhost/magnetic-board-server/notes/read.php', params).then(result => {
      this.$log.log('Notes fetched:', result);
      return Promise.resolve(result);
    });
  }

  updateSize() {
    this.$log.log('update size');
  }
}

DataService.$inject = ['$http', '$log'];

export {DataService};
