import React from 'react';
import '../Css/Medical.css';
import Navbar from './Navbar';
import { useSelector as stateGetter } from 'react-redux';
import axios from 'axios';


const medicals = () => {
  const state = stateGetter(state=>state.train)
  console.log(state)
  const requestHandler = (type)=>async()=>{
    await axios.post(`https://rail-net.netlify.app/.netlify/functions/api/travel/${state.train._id}`,{type,ticketID:state.ticketID})
    alert('requested')
  }
  return (
    <>
    <Navbar/>
    <div className='main-medical'>
      <br />
      <div className='three-button-div'>
        <button className='button-medical' onClick={requestHandler('bandage')}>
          Bandage +
        </button>
        <button className='button-medical' onClick={requestHandler('insect repellent')}>
          Insect Repellent +
        </button>
        <button
          className='button-medical'
          style={{ marginRight: '100px' }}
          onClick={requestHandler('crepe bandage')}
        >
          Crepe Bandage +
        </button>
      </div>
      <br />
      <br />
      <div className='three-button-div'>
        <button className='button-medical' onClick={requestHandler('cotton')}>Cotton +</button>
        <button className='button-medical' onClick={requestHandler('first aid kit')}>
          First Aid Kit +
        </button>
        <button
          className='button-medical'
          style={{ marginRight: '100px' }}
          onClick={requestHandler('painkiller')}
        >
          Painkiller +
        </button>
      </div>
      <br />
      <br />
      <div className='three-button-div'>
        <button className='button-medical' onClick={requestHandler('crocin')}>Crocin +</button>
        <button className='button-medical' onClick={requestHandler('cpr mask')}>
          CPR Mask +
        </button>
        <button
          className='button-medical'
          style={{ marginRight: '100px' }}
          onClick={requestHandler('thermometer')}
        >
          Thermometer +
        </button>
      </div>
      <br />
      <br />
      <div className='three-button-div'>
        <button className='button-medical' onClick={requestHandler('ointment')}>
          Gel/Ointment +
        </button>
        <button className='button-medical' onClick={requestHandler('inhaler')}>
          Inhaler +
        </button>
        <button
          className='button-medical'
          style={{ marginRight: '100px' }}
          onClick={requestHandler('lisinopril')}
        >
          Lisinopril +
        </button>
      </div>
      <br />
      <br />
      <div className='three-button-div'>
        <button className='button-medical' onClick={requestHandler('icepack')}>
          Icepack +
        </button>
        <button className='button-medical' onClick={requestHandler('allergy cream')}>
          Allergy Cream +
        </button>
        <button
          className='button-medical'
          style={{ marginRight: '100px' }}
          onClick={requestHandler('lorazepam')}
        >
          Lorazepam +
        </button>
      </div>
      <br />
      <br />
      <div className='three-button-div'>
        <button className='button-medical' onClick={requestHandler('saline sol')}>
          Saline Solution +
        </button>
        <button className='button-medical'>Epipen +</button>
        <button
          className='button-medical'
          style={{ marginRight: '100px' }}
          onClick={requestHandler('asprin')}
        >
          Aspirin +
        </button>
      </div>
    </div>
    </>
  );
};

export default medicals;
