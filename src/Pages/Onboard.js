import React from 'react'
import '../Css/Onboard.css'
import Navbar from './Navbar';
import { useSelector as stateGetter } from 'react-redux';
import axios from 'axios';


const Onboard = () => {
  const state = stateGetter(state=>state.train)
  console.log(state)
  const requestHandler = (type)=>async()=>{
    await axios.post(`https://rail-net.netlify.app/.netlify/functions/api/travel/${state.train._id}`,{type,ticketID:state.ticketID})
    alert('requested')
  }
  return <>
  <Navbar/>
  <div className="onboard-card-layout-1">
    <div className="onboard-card-items">
      {state.train.onboardServices.map(s => (
        <img className="onboard-tain-sub" alt={s.name} src={s.img} onClick={requestHandler(s.name)}/>
      ))}
    </div>
  </div>
</>
};

export default Onboard;
