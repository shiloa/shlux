import { UPDATE_SERVERS, FILTER_SERVERS } from '../constants/ActionTypes';

export function updateServers() {
  return {
    type: UPDATE_SERVERS
  };
}

export function filterServers(query) {
  return {
    type: FILTER_SERVERS,
    query: query
  };
}
