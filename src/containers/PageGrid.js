import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Board from '../components/board/Board'
import '../styles/containers/pageGrid.css'


const PageGrid = () => {
  return (
    <div className="page-grid">
      <div className="page-grid-sidebar">
        <Sidebar/>
      </div>
      <div className="page-grid-layout">
        <div className="page-grid-layout-header">
          <Header/>
        </div>
        <div className="page-grid-layout-board">
          <Board/>
        </div>
        <div className="page-grid-layout-footer">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default PageGrid;



