import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DislplayFlights extends React.Component{

    state = {
        flightData : []
    }
    componentWillMount(){
        axios.get('http://localhost:8080/flightservices/flights?from='+this.props.match.params.from+
        '&to='+this.props.match.params.to+
        '&departureDate='+this.props.match.params.departureDate).then(res=> {
            const flightData = res.data;
            this.setState({flightData})
            console.log(flightData)
        })
    }
    render(){
        return (<div>

<div className="container py-5">
  <div className="Card">
    <div className="Card__content Card__content--border">
      <button className="Button">
      <svg style={{marginTop:'14px'}} id="Capa_1" enable-background="new 0 0 100 100" height="44" viewBox="0 0 604 800" width="32" xmlns="http://www.w3.org/2000/svg"><g><path d="m509.68 173.777c-2.945-8.091-8.601-15.037-15.928-19.56-31.838-19.653-70.263-23.585-105.42-10.789l-57.786 21.032-117.58-61.865c-3.745-1.971-8.149-2.269-12.126-.822l-45.74 16.648c-5.084 1.85-8.779 6.292-9.672 11.628-.894 5.335 1.151 10.74 5.354 14.146l72.968 59.137-122.333 44.526-39.53-34.887c-4.122-3.637-9.903-4.732-15.07-2.851l-36.934 13.441c-7.792 2.836-11.81 11.452-8.974 19.244l23.088 63.434c15.102 41.491 61.142 62.96 102.633 47.859l114.25-41.583-15.15 80.839c-.993 5.3.932 10.726 5.045 14.215 4.112 3.488 9.78 4.503 14.847 2.659l45.74-16.648c3.991-1.453 7.179-4.527 8.776-8.461l44.859-110.5 141.711-51.578c19.915-7.25 30.22-29.349 22.972-49.264zm-314.588 103.014-14.095 5.13c-7.785 2.833-16.392-1.18-19.226-8.965s1.18-16.392 8.965-19.226l14.095-5.13c7.785-2.833 16.392 1.18 19.226 8.965s-1.18 16.392-8.965 19.226zm70.477-25.652-14.095 5.13c-7.785 2.833-16.392-1.18-19.226-8.965-2.833-7.785 1.18-16.392 8.965-19.226l14.095-5.13c7.785-2.833 16.392 1.18 19.226 8.965s-1.18 16.393-8.965 19.226zm70.477-25.651-14.095 5.13c-7.785 2.833-16.392-1.18-19.226-8.965-2.833-7.785 1.18-16.392 8.965-19.226l14.095-5.13c7.785-2.833 16.392 1.18 19.226 8.965 2.834 7.785-1.18 16.392-8.965 19.226zm70.477-25.652-14.095 5.13c-7.785 2.833-16.392-1.18-19.226-8.965s1.18-16.392 8.965-19.226l14.095-5.13c7.785-2.833 16.392 1.18 19.226 8.965 2.834 7.785-1.18 16.393-8.965 19.226z"/></g></svg>
        <span>Available flights</span>
      </button>
      <button className="Button ml-auto">
        <svg aria-hidden="true" height={12} width={12} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 7h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 1 1 2 0z" fillRule="evenodd" />
        </svg>
        <span>New</span>
      </button>
      <button className="Button ml-2">
        <svg aria-hidden="true" height={12} width={12} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10.006a1 1 0 1 1-2 0v-5.6L2.393 15.009a.992.992 0 1 1-1.403-1.404L11.595 3.002h-5.6a1 1 0 0 1 0-2.001h8.02a1 1 0 0 1 .284.045.99.99 0 0 1 .701.951z" fillRule="evenodd" />
        </svg>
        <span>Export</span>
      </button>
    </div>
    <table className="Card__table Table">
      <thead>
        <tr>
          <td className="Table__checkbox">
            <label htmlFor="TableCheckAll" className="CheckBox">
              <input type="checkbox" id="TableCheckAll" />
              <span className="CheckBox__control">
                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 14 14">
                  <path d="M10.346 3.301a.929.929 0 0 1 1.37 0 1.076 1.076 0 0 1 0 1.456l-4.64 4.94a.929.929 0 0 1-1.37 0L3.284 7.123a1.076 1.076 0 0 1 0-1.456.929.929 0 0 1 1.37 0L6.39 7.513l3.955-4.212z" />
                </svg>
              </span>
            </label>
          </td>
          <td>
            <div className="Table__header-item">
              <span>Airlines</span>
              <svg height={12} width={12} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.74 15.901l-.227-2.432a5.632 5.632 0 0 1-1.329-.55l-1.88 1.558a8.046 8.046 0 0 1-1.781-1.78l1.558-1.881a5.632 5.632 0 0 1-.55-1.329L.099 9.26a8.06 8.06 0 0 1 0-2.518l2.432-.228c.127-.47.313-.916.55-1.329l-1.558-1.88a8.046 8.046 0 0 1 1.78-1.781L5.185 3.08a5.632 5.632 0 0 1 1.329-.55L6.74.099a8.06 8.06 0 0 1 2.518 0l.228 2.432c.47.127.916.313 1.329.55l1.88-1.558a8.046 8.046 0 0 1 1.781 1.78L12.92 5.185c.237.413.423.859.55 1.329l2.432.228a8.06 8.06 0 0 1 0 2.518l-2.432.228c-.127.47-.313.916-.55 1.329l1.558 1.88a8.046 8.046 0 0 1-1.78 1.781l-1.881-1.558a5.632 5.632 0 0 1-1.329.55l-.228 2.432a8.06 8.06 0 0 1-2.518 0zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fillRule="evenodd" /></svg>
            </div>
          </td>
          <td>
            <div className="Table__header-item">
              <span>Departure City</span>
              <svg height={12} width={12} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.74 15.901l-.227-2.432a5.632 5.632 0 0 1-1.329-.55l-1.88 1.558a8.046 8.046 0 0 1-1.781-1.78l1.558-1.881a5.632 5.632 0 0 1-.55-1.329L.099 9.26a8.06 8.06 0 0 1 0-2.518l2.432-.228c.127-.47.313-.916.55-1.329l-1.558-1.88a8.046 8.046 0 0 1 1.78-1.781L5.185 3.08a5.632 5.632 0 0 1 1.329-.55L6.74.099a8.06 8.06 0 0 1 2.518 0l.228 2.432c.47.127.916.313 1.329.55l1.88-1.558a8.046 8.046 0 0 1 1.781 1.78L12.92 5.185c.237.413.423.859.55 1.329l2.432.228a8.06 8.06 0 0 1 0 2.518l-2.432.228c-.127.47-.313.916-.55 1.329l1.558 1.88a8.046 8.046 0 0 1-1.78 1.781l-1.881-1.558a5.632 5.632 0 0 1-1.329.55l-.228 2.432a8.06 8.06 0 0 1-2.518 0zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fillRule="evenodd" /></svg>
            </div>
          </td>
          <td>Arrival City</td>
          <td>Departure Date and Time</td>
        </tr>
      </thead>
      <tbody>
        <tr>
        
          <td className="Table__checkbox">
          
            <label htmlFor="TableCheck_1" className="CheckBox">
                
              <input type="checkbox" id="TableCheck_1" />
              
              <span className="CheckBox__control">
                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 14 14">
                  <path d="M10.346 3.301a.929.929 0 0 1 1.37 0 1.076 1.076 0 0 1 0 1.456l-4.64 4.94a.929.929 0 0 1-1.37 0L3.284 7.123a1.076 1.076 0 0 1 0-1.456.929.929 0 0 1 1.37 0L6.39 7.513l3.955-4.212z" />
                </svg>
              </span>
            </label>
          </td>
          
          <td ></td>
          <td></td>
          <td ></td>
          <td></td>
          
        </tr>
        
      </tbody>
      {this.state.flightData.map(flight => <RowCreator item={flight} />)}
    </table>
    
    <div className="Card__content">
      <div className="Card__content-text"><strong>1</strong> result</div>
      <button className="Button ml-auto" disabled>
        <span>Previous</span>
      </button>
      <button className="Button ml-2" disabled>
        <span>Next</span>
      </button>
    </div>
  </div>
</div>



        { /*<h2>Flights:</h2>
                <table>
                    <thead>
                        <th>Airlines</th>
                        <th>Departure City</th>
                        <th>Arrival City</th>
                        <th>Departure Date and Time</th>
                    </thead>
                    <tbody>
                    {this.state.flightData.map(flight => <RowCreator item={flight} />)}

                    </tbody>
                </table>*/}
               

        </div>)
    }
}

class RowCreator extends React.Component{
    render(){
        var flight = this.props.item;
        return <tr><Link to = {'/passengerDetails/'+flight.id}>{flight.operatingAirlines}</Link>
            <td> </td>
            <td>{flight.departureCity}</td>
            <td><Link to = {'/passengerDetails/'+flight.id}>{flight.arrivalCity}</Link></td>
            <td>{flight.estimatedDepartureTime}</td>
            <button style={{marginTop:'5px'}} className="Button 31-auto">
                <Link 
                style={{textDecoration:'none', color:'#1a1f36'}}
                 to = {'/passengerDetails/'+flight.id}>
                    <span>Select</span>
                    </Link>
                    </button>
        </tr>
        }

}

export default DislplayFlights;