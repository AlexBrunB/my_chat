// @flow
import React, { Component, } from 'react';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session';
import Navbar from '../../components/Navbar';

type Props = {
  logout: () => void,
  currentUser: Object,
  isAuthenticated: boolean,
}

class Home extends Component<Props> {
  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogout = () => this.props.logout(this.context.router);

  render() {
    const { currentUser, isAuthenticated } = this.props;

    return (
      <div style={{ flex: '1' }}>
        <Navbar /><div className="content">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
        {isAuthenticated &&
          <div>
            <span>{currentUser.msg}</span>
            <button type="button" onClick={this.handleLogout}>Logout</button>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.currentUser,
    //isAuthenticated: true,
    //currentUser: {'username': 'rfremont'},
  }),
  { logout }
)(Home);