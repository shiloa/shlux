import API from '../api';
import { UPDATE_SERVERS, FILTER_SERVERS } from '../constants/ActionTypes';

const initialState = {
  servers: []
};

export default function serverStore(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVERS:
      let servers = API.filter(action.query);
      return [{ servers: servers }, ...state];
    default:
      return state;
  }
}
