import React from 'react';
import { Provider } from 'react-redux';
import Board from 'board';
import { connect } from 'react-redux';

import Response from 'response';
import GuessBox from 'guessbox';

export const Game = ({store, actions}) => {
  return (
    <Provider store={store}>
    <Response />
    <GuessBox />
    </Provider>
  );
}

function mapStateToProps(state) {
  return {
    
  };
}

export default Game;
