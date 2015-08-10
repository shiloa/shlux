import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var countSpan;
    if (this.props.count && this.props.count >= 0) {
      countSpan = <span className="label label-success">{this.props.count} servers found</span>;
    }
    return (
      <div className="well">
        <form action="" className="form-inline" onChange={this.props.onChangeHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="query" 
              style={{"marginRight" : "1em"}}>Search By Node Type:</label>
            <input id="query" type="text" 
              className="form-control" 
              name="query" 
              placeholder="e.g - generic" />
            {countSpan}
          </div>
        </form>
      </div>
    );
  }
}
