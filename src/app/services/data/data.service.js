class DataService {
  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
    this.boardId = this.getCookieBoardId();
    this.operationsCount = this.getCookieOperationsCount() || 0;
  }

  getCookieBoardId() {
    const regexp = /boardId=(\d*)/;
    // eslint-disable-next-line
    return regexp.exec(document.cookie)[1];
  }

  setBoardId(id) {
    this.boardId = id;
    // eslint-disable-next-line
    document.cookie = `boardId=${id}`;
  }

  getCookieOperationsCount() {
    const regexp = /operationsCount=(\d*)/;
    // eslint-disable-next-line
    const result = regexp.exec(document.cookie);
    if (result) {
      // eslint-disable-next-line
      return regexp.exec(document.cookie)[1];
    }
  }

  setOperationsCount(operations) {
    this.operationsCount = operations;
    // eslint-disable-next-line
    document.cookie = `operationsCount=${operations}`;
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

  addBoard(name) {
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

  updateSize(noteId, x, y) {
    const params = {
      params: {
        boardId: this.boardId,
        noteId,
        sizeX: x,
        sizeY: y
      }
    };

    return this.$http.get('http://localhost/magnetic-board-server/notes/update/size.php', params).then(result => {
      this.$log.log('Updated size:', result);
      return Promise.resolve(result);
    });
  }

  updatePosition(noteId, x, y) {
    const params = {
      params: {
        boardId: this.boardId,
        noteId,
        positionX: x,
        positionY: y
      }
    };
    return this.$http.get('http://localhost/magnetic-board-server/notes/update/position.php', params).then(result => {
      this.$log.log('Updated position:', result);
      return Promise.resolve(result);
    });
  }

  updateContent(noteId, content) {
    const params = {
      params: {
        boardId: this.boardId,
        noteId,
        content
      }
    };
    this.$log.log('Updating content with valuees:', params);
    return this.$http.get('http://localhost/magnetic-board-server/notes/update/content.php', params).then(result => {
      this.$log.log('Updated content:', result);
      return Promise.resolve(result);
    });
  }

  addNote(position, size, content) {
    const params = {
      params: {
        boardId: this.boardId,
        positionX: position.x,
        positionY: position.y,
        sizeX: size.x,
        sizeY: size.y,
        content
      }
    };
    this.$log.log(params);
    return this.$http.get('http://localhost/magnetic-board-server/notes/add.php', params).then(result => {
      this.$log.log('Added:', result);
      return Promise.resolve(result);
    });
    // osition="{x: 0, y: 0}" size="{x: 100, y: 100}" content=""
  }

  removeNote(id) {
    const params = {
      params: {
        boardId: this.boardId,
        noteId: id
      }
    };
    this.$log.log(params);
    return this.$http.get('http://localhost/magnetic-board-server/notes/remove.php', params).then(result => {
      this.$log.log('removed:', result);
      return Promise.resolve(result);
    });
    // osition="{x: 0, y: 0}" size="{x: 100, y: 100}" content=""
  }
}

DataService.$inject = ['$http', '$log'];

export {DataService};
