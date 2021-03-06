import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



class FindFLights extends React.Component{
    handleSubmit(event){

        this.props.history.push('displayFlights/'+this.from+'/'+this.to+'/'+this.departureDate)
    }
    render(){
        return (<div className="html" style={{margin:'auto', width:'50%'}}>

<svg id="Capa_1" enable-background="new 0 0 60 60" height="61" viewBox="0 0 500 540" width="105" xmlns="http://www.w3.org/2000/svg"><g><circle cx="256" cy="256" fill="#5f97fb" r="256"/><path d="m280.149 231.384-67.763-67.763-108.004-8.125 125.828 125.828-46.57 46.57-95.109 4.259 179.555 179.555c135.771-6.311 243.914-118.375 243.914-255.708 0-24.804-3.54-48.778-10.121-71.459l-87.443-87.443z" fill="#5688e1"/><path d="m133.481 125.933-29.1 29.561 141.175 68.089 46.907-34.531 15.054-35.397z" fill="#d4e4e4"/><path d="m159.288 320.942 180.535-203.746c14.591-14.591 51.613-43.107 74.851-19.869l-122.663 144.026-145.37 124.006-58.111-33.206 20.618-20.618z" fill="#e8f1f1"/><path d="m386.067 378.519-29.561 29.1-68.089-141.175 34.531-46.907 35.397-15.054z" fill="#c0d7d7"/><path d="m191.058 352.712 203.746-180.535c14.591-14.591 43.107-51.613 19.87-74.851l-268.033 268.033 33.206 58.111 20.618-20.618z" fill="#d4e4e4"/></g></svg>

            <div className="container" style={{marginTop: '21px', maxWidth:'352px'}}>
            <h2> Find Flights:</h2>
                <form>
                
                From: <input className="form-control" id="formGroupExampleInput" type="text" name="from" onChange={(event) => {this.from=event.target.value}} />
                <br></br>
                To: <input className="form-control" type="text" name="to" onChange={(event) => {this.to=event.target.value}}/>
                <br></br>
                Departure Date: <input className="form-control" type="text" name="departureDate" onChange={(event) => {this.departureDate=event.target.value}}/>
                <br></br>
                <Button onClick={this.handleSubmit.bind(this)} >Search</Button>
                </form>
            </div>
        




               
                
        </div>)
    }
}

export default FindFLights;