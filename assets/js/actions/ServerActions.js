import API from '../api';
import { SERVERS_UPDATED } from '../constants/ActionTypes';

export function filterServers(query) {
  // query the API for the filtered server list
  var servers = API.filter(query);

  return {
    type: SERVERS_UPDATED,
    servers: servers
  };

  // return function(dispatch) {

    // // query the API for the filtered server list
    // var servers = API.filter(query);

    // // notify that the server list
    // // was filtered
    // dispatch({
      // type: SERVERS_UPDATED,
      // servers: servers
    // });
  // };
}
