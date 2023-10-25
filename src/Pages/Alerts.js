import React from 'react';
import '../Css/Alert.css';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const Alerts = () => {
  const state = useSelector(state => state.train);
  console.log(state);
  const { halts, status } = state.train;
  const i = halts.indexOf(status);
  return (
    <>
    <Navbar/>
    <div className='main-alert'>
      <div className='alert-update'>
        Next Station: {halts[i + 1] || ''}
      </div>
      <div className='alert-update'>
        Current Station: {status || ''}
      </div>
      <div className='alert-update'>
        Previous Station: {halts[i - 1] || ''}
      </div>
    </div>
    </>
  );
};

export default Alerts;
