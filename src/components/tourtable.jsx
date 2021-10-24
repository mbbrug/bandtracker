import React, {Component} from "react";

class TourTable extends Component {

    render(){
        if(this.props.tourdata.stops !== undefined) {
            return(
                <div className="col p-3">
                    <div>
                        <h2>Schedule</h2>
                    </div>
                    <table className="table table-striped">
                        <thead className = "table-dark">
                            <tr><th>Tour Date</th><th>Location</th></tr>
                        </thead>
                        <tbody>
                                {this.props.tourdata.stops.map((tourstop, idx) => 
                                <tr key={idx}><td>{tourstop.stop_date}</td><td>{tourstop.city}</td></tr>)}
                        </tbody>
                    </table>
                </div>
            );
        } else return null;
    }
}
 
export default TourTable;