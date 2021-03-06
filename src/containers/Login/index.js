// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';

type Props = {
  login: () => void,
}

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogin = data => this.props.login(data, this.context.router);

  render() {
    return (
      <div style={{ flex: '1' }}>
        <Navbar /><div  className="content">
        <LoginForm onSubmit={this.handleLogin} />
      </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);