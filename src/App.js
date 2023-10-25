import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Medicals from './Pages/Medicals';
import Kuli from './Pages/Kuli';
import Onboard from './Pages/Onboard';
import Alerts from './Pages/Alerts';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import trainReducer from './store/reducers/train';

const store = createStore(
  combineReducers({
    train : trainReducer,
  }),
  applyMiddleware(ReduxThunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/medicals' element={<Medicals />} />
          <Route path='/kuli' element={<Kuli />} />
          <Route
            path='/onboard-facilities'
            element={<Onboard />}
          />
          <Route path='/alerts' element={<Alerts />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
