import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import ServerActions from '../actions/ServerActions';

class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  changeHandler(e) {
    e.preventDefault();
    var query = e.target.value;

    // trigger new search 
    // servers request here
    this.props.onChangeHandler(query);
  }

  render() {
    return (
      <SearchForm 
        onChangeHandler={this.changeHandler.bind(this)} 
        count={this.props.servers.length} 
      />
    );
  }
}

export default connect(function(state) {
  let { servers } = state.servers;
  return {
    servers: servers
  };
})(SearchFormContainer);

