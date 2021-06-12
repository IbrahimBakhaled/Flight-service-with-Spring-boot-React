import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class PassengerDetails extends React.Component{
        state ={}

    componentWillMount(){

        axios.get("http://localhost:8080/flightservices/flights/"+this.props.match.params.flightId)
        .then(res=>{
            this.setState(res.data);
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const data = {
            flightId:this.props.match.params.flightId,
            passengerFirstName:this.passengerFirstName,
            passengerLastName:this.passengerLastName,
            passengerMiddleName:this.passengerMiddleName,
            passengerEmail:this.passengerEMail,
            passengerPhone:this.passengerPhone
        }
        axios.post("http://localhost:8080/flightservices/reservations", data)
        .then(res=>{
            this.props.history.push('/confirmReservation/'+res.data.id)
        })
    }
    render(){
        return (<div className="container" style={{borderRadius:'4px', margin:'auto', width:'50%', background:'white', boxShadow:'0 15px 35px 0 rgb(60 66 87 / 8%), 0 5px 15px 0 rgb(0 0 0 / 12%)', maxWidth:'600px', paddingBottom:'20px', paddingTop:'20px'}}>
            <h2> <span style={{fontWeight:'800'}}>Confirm Reservation:</span></h2>
            <h2 style={{fontWeight:'800', fontSize:'23px'}}>Flight Details:</h2>
            <div className="grid" style={{display:'grid', gridTemplateColumns:'50% 50%', marginTop:'35px', marginBottom:'35px'}}>
            <div className="left">Airline:</div>
            <div className="right">{this.state.operatingAirlines}</div>
            <div className="left">Departure City:</div>
            <div className="right">{this.state.departureCity}</div>
            <div className="left">Arrival City:</div>
            <div className="right">{this.state.arrivalCity}</div>
            <div className="left"> Departure Date:</div>
            <div className="right">{this.state.dateOfDeparture}</div>

            </div>
            

            <h2 style={{fontWeight:'800', fontSize:'23px'}}>Passenger Details:</h2>
            <form style={{width:'75%', maxWidth:'409px', margin:'auto'}}>
                First Name: <input className="form-control" type="text" name="passengerFirstName" onChange={(event) => {this.passengerFirstName=event.target.value}}/><br/>
                Last Name: <input className="form-control" type="text" name="passengerLastName" onChange={(event) => {this.passengerLastName=event.target.value}}/><br/>
                Middle Name: <input className="form-control" type="text" name="passengerMiddleName" onChange={(event) => {this.passengerMiddleName=event.target.value}}/><br/>
                Email : <input className="form-control" type="text" name="passengerEmail" onChange={(event) => {this.passengerEMail=event.target.value}}/><br/>
                Phone : <input className="form-control" type="text" name="passengerPhone" onChange={(event) => {this.passengerPhone=event.target.value}}/><br/>
                <h2 style={{fontWeight:'800', fontSize:'23px'}}>Card Details:</h2>
                Card Number : <input className="form-control" type="text" name="cardNumber" onChange={(event) => {this.cardNumber=event.target.value}}/><br/>
                Expiry Date : <input className="form-control" type="text" name="expiryDate" onChange={(event) => {this.expiryDate=event.target.value}}/><br/>
                Security Code : <input className="form-control" type="text" name="securityCode" onChange={(event) => {this.securityCode=event.target.value}}/><br/>
                <Button onClick={this.handleSubmit.bind(this)}>Confirm</Button>
            </form>
        </div>)
    }
}

export default PassengerDetails;