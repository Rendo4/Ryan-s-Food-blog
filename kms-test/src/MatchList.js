import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './actions'

class MatchList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    console.log(this.props)
    const { error, isLoading, matchList } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Match List</h1>
          <ul>
            {matchList.map((match, index) =>
              <li key={index}>
                <h3>{match.summoner}</h3>
                <p>{match.opponent}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    matchList: state.matchList,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(MatchList);