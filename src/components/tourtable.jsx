import React, {Component} from "react";

class TourTable extends Component {

    render(){
        if(Object.keys(this.props.tourdata).length>0) {
        
        return(
            <div className="col p-3">
                <div>
                    <h2>Upcoming Tour Stops</h2>
                </div>
                <table className="table table-striped">
                    <thead className = "table-dark">
                        <tr><th>Tour Date</th><th>Location</th></tr>
                    </thead>
                    <tbody>
                        {this.props.tourdata.map((stop)=>{
                            return(<tr key={stop.id}><td>{new Date(stop.datetime).toDateString()}</td><td>{stop.venue.location}</td></tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );

    } else return null; }
}
 
export default TourTable;
