import React, { useState } from 'react';
import '../Css/Home.css';
import { useNavigate } from 'react-router-dom';
import Train1 from '../Images/Train1.jpg';
import Train2 from '../Images/Train2.jpg';
import Train3 from '../Images/Train3.jpg';
import Train4 from '../Images/Train4.jpg';
import Train5 from '../Images/Train5.jpg';
import Train6 from '../Images/Train6.jpeg';
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import {
  getStatus,
  getTicket,
} from '../store/actions/train';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [
    trainID,
    setTrainID,
  ] = useState('');
  const [
    ticketID,
    setTicketID,
  ] = useState('');
  const { train } = useSelector(state => state.train);
  console.log(train);

  const submitTrain = async () => {
    await dispatch(getStatus(trainID));
    navigate('/alerts');
  };

  const submitTicket = async () => {
    await dispatch(getTicket(ticketID));
    navigate('/alerts');
  };
  return (
    <>
    <Navbar />
    <div className='landing-home'>
      <div className='div'>
        {/* Trains Update */}
        <div className='card-layout-1'>
          <div className=''>
            <div className=''>
              <div className=''>
                <div className='subhead1'>
                  Live Status Updates{' '}
                  <input
                    className='location-text'
                    placeholder='Train Number'
                    type='text'
                    name=''
                    id=''
                    value={trainID}
                    onChange={e =>
                      setTrainID(e.target.value)}
                  />
                  <button onClick={submitTrain} className='btn btn-success'>
                    Search
                  </button>
                </div>
                <div className='subhead2'>
                  currently running
                </div>
              </div>
              <div className='card-items'>
                <img
                  className='tain-sub'
                  alt='Group'
                  src={Train1}
                />
                <img
                  className='tain-sub'
                  alt='Group'
                  src={Train2}
                />
                <img
                  className='tain-sub'
                  alt='Group'
                  src={Train3}
                />
                <img
                  className='tain-sub'
                  alt='Group'
                  src={Train4}
                />
                <img
                  className='tain-sub'
                  alt='Group'
                  src={Train5}
                />
                <img
                  className='tain-sub-1'
                  alt='Group'
                  src={Train6}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='contactus'>
          <div className='contactus-sub'>CONTACT US</div>
        </div>
        <div className='overlap-3'>
          <p
            style={{
              fontSize   : 'x-large',
              fontWeight : 'Bold',
              textAlign  : 'center',
              marginTop  : '30px',
            }}
          >
            Already Boarded?{' '}
          </p>
          <p
            style={{
              fontSize   : 'x-large',
              fontWeight : 'Bold',
              textAlign  : 'center',
            }}
          >
            Check the available Onboard Services
          </p>
          <br />
          <input
            className='location-text'
            placeholder='Enter Ticket Number'
            type='text'
            name=''
            id=''
            style={{ width: '600px', marginLeft: '450px' }}
            value={ticketID}
            onChange={e => setTicketID(e.target.value)}
          />
          <button onClick={submitTicket}className='btn btn-success'>SEARCH</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
