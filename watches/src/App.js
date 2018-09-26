import React, { Component } from 'react';
import logo from './images/general/omega.jpg';
import './App.css';
import {PivotBasic} from './privotBar'

class App extends Component {
  render() {

    const styles = {
      backgroundImage: "url("+logo+")",
      backgroundSize: "100% ",
      backgroundPosition: "center right",
      height: "200px",
    }

    return (
      <div className="App">
        <header className="App-header" style={styles}>
        <h1 className="ms-font-su">Catalogo de relojes</h1>
        </header>
        <PivotBasic/>
        <footer>
          footer needs atention
        </footer>
      </div>
    );
  }
}

export default App;
