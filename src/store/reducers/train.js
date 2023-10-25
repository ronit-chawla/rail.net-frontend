import { SET_TICKET, SET_TRAIN } from '../actions/train';

const initialState = {
  ticketID : null,
  train    : {},
};

const trainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET:
      const { ticketID, train } = action;
      return { ticketID, train };
    case SET_TRAIN:
      return { train: action.train.train };

    default:
      return state;
  }
};

export default trainReducer;
