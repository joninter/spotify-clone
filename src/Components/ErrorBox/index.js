import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import CloseIcon from '../../assets/images/close.svg';

import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: Proptypes.func.isRequired,
  error: Proptypes.shape({
    visible: Proptypes.bool,
    message: Proptypes.string,
  }).isRequired,
};

const mapStatoToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStatoToProps,
  mapDispatchToProps,
)(ErrorBox);
