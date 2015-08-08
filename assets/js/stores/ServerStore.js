import ServerActions from '../actions/ServerActions';
import alt from '../alt';
import API from '../api';

class ServerStore {

  constructor() {
    this.servers = [];

    this.bindListeners({
      handleUpdateServers: ServerActions.UPDATE_SERVERS,
    });
  }

  handleUpdateServers(servers) {
    this.servers = servers;
  }

}

export default alt.createStore(ServerStore, 'ServerStore');
