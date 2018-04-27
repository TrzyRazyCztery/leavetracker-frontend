import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import Board from './Board'
import '../styles/App.css'

const App = (props) => {
  return (
      <div className="app">
        <div className="app-sidebar">
          <Sidebar/>
        </div>
        <div className="app-layout">
          <div className="app-layout-header">
            <Header {...props}/>
          </div>
          <div className="app-layout-board">
            <Board/>
          </div>
          <div className="app-layout-footer">
            <Footer/>
          </div>
        </div>
      </div>
  )
};

export default App;
