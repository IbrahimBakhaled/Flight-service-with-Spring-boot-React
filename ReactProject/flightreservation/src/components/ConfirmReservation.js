import axios from 'axios';
import React from 'react';

class ConfirmReservation extends React.Component{


    state = {}

    componentWillMount(){
        axios.get("http://localhost:8080/flightservices/reservations/"+this.props.match.params.reservationId)
        .then(res=>{
            console.log(res.data)
            this.setState(res.data);
        })
    }

    handleSubmit(event){
        event.preventDefault();

        axios.put("http://localhost:8080/flightservices/reservations", {
            id:this.props.match.params.reservationsId,
            checkIn:true,
            numberOfBags:this.numberOfBags
        })
        .then(res=>{
            this.props.history.push('/confirmCheckIn')
        })
    }
    render(){

        if (this.state.flight === undefined){
            return null;
        }







        return (<div className="container" style={{margin:'auto', width:'50%', boxShadow:'rgb(60 66 87 / 8%) 0px 15px 35px 0px, rgb(0 0 0 / 12%) 0px 5px 15px 0px',
                                                  maxWidth:'600px', paddingBottom:'20px', paddingTop:'20px', background:'white', borderRadius:'5px' }}>
                <h2 style={{fontWeight:'800', fontSize:'18px'}}>Flight Reservation is complete. The confirmation code is {this.props.match.params.reservationId}</h2>

                <form>
                reservation code: {this.props.match.params.reservationId}<br/>
                Airline: {this.state.flight.operatingAirlines}<br/>
                Flight No: {this.state.flight.flightNumber}<br/>
                Departure City: {this.state.flight.departureCity}<br/>
                Arrival City: {this.state.flight.arrivalCity}<br/>
                Departure Date: {this.state.flight.dateOfDeparture}<br/>
                Estimated Departure Time: {this.state.flight.estimatedDepartureTime}<br/>
                <h2 style={{fontWeight:'800', fontSize:'23px'}}>Passenger Informations:</h2>
                First Name: {this.state.passenger.firstName}<br/>
                Last Name: {this.state.passenger.lastName}<br/>
                Email: {this.state.passenger.email}<br/>
                Phone: {this.state.passenger.phone}<br/>
            
            

                </form>

        </div>)
    }
}

export default ConfirmReservation;