import React, {Component} from "react";

class DiscoTable extends Component {
    
    render(){
        if(Object.keys(this.props.discodata).length>0) {
        
        return(
            <div className="col p-3">
                <div>
                    <h2>Discography</h2>
                </div>
                <table className="table table-striped">
                    <thead className = "table-dark">
                        <tr><th>Album Year</th><th>Album Name</th></tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.discodata).map(key =>(
                            this.props.discodata[key].map(({name, type})=>{
                                if(type === 'Album'){
                                    return(<tr key={name}><td>{key}</td><td>{name}</td></tr>)
                                }
                            })
                        ))}
                    </tbody>
                </table>
            </div>
        );

    } else return null; }
}
 
export default DiscoTable;