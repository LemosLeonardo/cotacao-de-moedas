import React, { Component } from 'react'
import Header from './components/Header'
import Rotas from './routes'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Rotas />
        <Footer />
      </div>
    )
  }
}

export default App;
