import alt from '../alt';
import API from '../api';

class ServerActions {
  updateServers(servers) {
    this.dispatch(servers);
  }

  filterServers(query) {
    this.dispatch()
    var servers = API.filter(query);
    this.actions.updateServers(servers);
    // API.filter(query)
    // .then(function(servers) {
      // this.actions.updateServers(servers);
    // })
    // .catch(function(errorMessage) {
      // console.log(errorMessage)
    // });
  }
}

export default alt.createActions(ServerActions);
