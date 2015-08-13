import API from '../api';
import ServerStore from '../stores/ServerStore';

var ServerActions = {

  filterServers: function(query) {
    var servers = API.filter(query);
    ServerStore.servers = servers;
    ServerStore.emitEvent('SERVERS_UPDATED');
  },
};


module.exports = ServerActions;
