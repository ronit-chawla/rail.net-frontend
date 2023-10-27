import React, { useState } from 'react';
import '../Css/Kuli.css';
import { useSelector as stateGetter } from 'react-redux';
import Navbar from './Navbar'
import axios from 'axios';

const Kuli = () => {
  const [station, setStation] = useState('')
  const state = stateGetter(state=>state.train)

  const submitHandler = async()=>{
    await axios.post(`https://rail-net.netlify.app/.netlify/functions/api/travel/${state.train._id}/porter`,{type:'Porter',ticketID:state.ticketID,halt:station})
    alert('requested')
  }
  return (
    <>
    <Navbar/>
    <div className='main-kuli'>
      <div
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <p
          style={{
            fontWeight: 'bold',
            fontSize: 'x-large',
          }}
        >
          Station:
        </p>{' '}
        <input
          className='location-text'
          placeholder='  Enter Station'
          type='text'
          name=''
          id=''
          style={{ width: '500px', borderBottom: '1px' }}
          value={station}
          onChange={e=>setStation(e.target.value)}
        />
        <br />
        <br />
      </div>
    

      <button
        type='button'
        class='btn btn-success'
        onClick={submitHandler}
        style={{
          width: '200px',
          fontSize: 'large',
          fontWeight: 'bold',
          marginLeft: '80px',
        }}
      >
        Submit
      </button>
    </div>
    </>
  );
};

export default Kuli;
