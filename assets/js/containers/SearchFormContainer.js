import React from 'react';
import SearchForm from '../components/SearchForm';
import ServerActions from '../actions/ServerActions';
import ServerStore from '../stores/ServerStore';

export default class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO
  }

  componentWillUnmount() {
    // TODO
  }

  changeHandler(e) {
    e.preventDefault();
    var query = e.target.value;

    // TODO: trigger new search 
    // servers request here
  }

  render() {
    return (
      <SearchForm 
        changeHandler={this.changeHandler} 
        count={this.state.servers.length} 
      />
    );
  }
}
