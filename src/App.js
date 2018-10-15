import React, { Component } from 'react';

import Logo from './logo.js';
import './App.css';
import Quote from './Quote';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      working: true,
    };
  }

handleClick=()=>this.setState({working:!this.state.working})

  render() {

    const {working}=this.state;
const work= working ? 'work' : 'sleep';
    return (
      <div className="App">
        <header className="App-header">
          <Logo className={work} alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <Quote working={working} handleClick={this.handleClick} />
        </header>
      </div>
    );
  }
}

export default App;
