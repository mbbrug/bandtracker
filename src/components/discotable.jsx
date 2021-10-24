import React, {Component} from "react";

class DiscoTable extends Component {

    render(){
        if(this.props.discodata.discography !== undefined) {
            return(
                <div className="col p-3">
                    <div>
                        <h2>Discography</h2>
                    </div>
                    <table className="table table-striped">
                        <thead className = "table-dark">
                            <tr><th>Release Year</th><th>Release Year</th></tr>
                        </thead>
                        <tbody>
                            {this.props.discodata.discography.map((release, idx) => 
                            <tr key={idx}><td>{release.year}</td><td>{release.title}</td></tr>)}
                        </tbody>
                    </table>
                </div>
                
            );
        } else return null;
    }
}
 
export default DiscoTable;