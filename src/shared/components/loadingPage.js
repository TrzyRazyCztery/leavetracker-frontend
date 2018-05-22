import React from 'react'
import 'shared/styles/loadingPage.css'
import { CircularProgress } from 'material-ui/Progress';


const LoadingPage = ({loadingText}) => (
  <div className="loading-page">
    <div className='loading-text'>{loadingText}</div>
    <CircularProgress size={100} />
  </div>
);

export default LoadingPage