import React from 'react';
import { connect } from 'react-redux';
import NewGameForm from './newGameForm'

let NewGameSubmit = ({ handleNewGameSubmit, values }) => 
  <NewGameForm
    onSubmit={values => handleNewGameSubmit(values.new)}
  />

const mapDispatchToProps = (dispatch) => ({
  handleNewGameSubmit: value => dispatch({ type: 'NewGame_CONTAINER_SUBMIT', payload: value }),
});

export default connect(null, mapDispatchToProps)(NewGameSubmit);