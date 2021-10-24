import React, {Component} from "react";

class DiscoTable extends Component {

    render(){
        if(this.props.discodata.discography !== undefined) {
            return(
                
                <table className="table table-striped">
                    <thead className = "table-dark">
                        <tr><th>Release Year</th><th>Release Year</th></tr>
                    </thead>
                    <tbody>
                        {this.props.discodata.discography.map((release, idx) => 
                        <tr key={idx}><td>{release.year}</td><td>{release.title}</td></tr>)}
                    </tbody>
                </table>
                
            );
        } else return null;
    }
}
 
export default DiscoTable;