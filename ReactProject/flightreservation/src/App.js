
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch} from 'react-router-dom'
import FindFLights from './components/FindFlights';
import DislplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';
function App() {
  return (
    <div className="App">
     
     <switch>
       <Route exact path="/" component={FindFLights}/>
       <Route exact path="/displayFlights/:from/:to/:departureDate" component={DislplayFlights} />
       <Route exact path="/passengerDetails/:flightId" component={PassengerDetails} />
       <Route exact path="/confirmReservation/:reservationId" component={ConfirmReservation}/>
     </switch>
    </div>
  );
}

export default App;
