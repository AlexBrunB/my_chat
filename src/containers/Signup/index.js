// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupForm from '../../components/SignupForm';
import Navbar from '../../components/Navbar';

type Props = {
  signup: () => void,
}

class Signup extends Component<Props> {
  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleSignup = data => this.props.signup(data, this.context.router);

  render() {
    return (
      <div style={{ flex: '1' }}>
        <Navbar /><div  className="content">
        <SignupForm onSubmit={this.handleSignup} />
      </div>
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
