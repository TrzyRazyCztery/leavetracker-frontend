import React from 'react'
import Grid from 'material-ui/Grid'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Dashboard from '../components/dashboard/Dashboard'
import '../styles/containers/pageGrid.css'


function PageGrid() {
  return (
    <div className="page-grid">
      <div className="page-grid-sidebar">
        <Sidebar/>
      </div>
      <div className="page-grid-layout">
        <div className="page-grid-layout-header">
          <Header/>
        </div>
        <div className="page-grid-layout-dashboard">
          <Dashboard/>
        </div>
        <div className="page-grid-layout-footer">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default PageGrid;



