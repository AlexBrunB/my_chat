// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
<div id="mySidenav" className="sidenav">
    <h3>MyChat</h3>
    <hr />
    <Link to="/" style={{color: 'white'}}>RomSample</Link>
  </div>;

export default Navbar;