import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../../hoc/Aux';
import Logo from '../BottomLogo/BottomLogo';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <Logo/>
      </Aux>
    );
  }
}

export default Layout;