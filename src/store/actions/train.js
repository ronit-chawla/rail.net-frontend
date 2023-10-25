import axios from 'axios';

export const SET_TRAIN = 'SET_TRAIN';
export const SET_TICKET = 'SET_TICKET';

const BASE_URL =
  'https://rail-net.netlify.app/.netlify/functions/api';

export const setTrain = train => ({
  type  : SET_TRAIN,
  train,
});

export const setTicket = (ticketID, train) => ({
  type     : SET_TICKET,
  ticketID,
  train,
});

export const getStatus = trainID => async dispatch => {
  const { data: train } = await axios.get(
    `${BASE_URL}/travel/${trainID}`
  );
  console.log(train);
  dispatch(setTrain(train));
};

export const getTicket = ticketID => async dispatch => {
  const { data } = await axios.get(
    `${BASE_URL}/tickets/${ticketID}`
  );
  console.log(data);
  dispatch(setTicket(data.ticket.id, data.travel));
};
