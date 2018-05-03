import React from 'react'
import Sidebar from 'src/layout/components/Sidebar'
import Header from 'src/layout/components/Header'
import Footer from 'src/layout/components/Footer'
import Board from 'src/layout/components/Board'
import 'src/layout/styles/app.css'
import Notifications from 'src/shared/components/Notifications'

const App = (props) => {
  return (
      <div className="app">
        <Notifications />
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
