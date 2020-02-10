import React ,{Component} from 'react';
class Search extends Component{
    constructor(props) {    
        super(props);
        this.state = {
            // items: Items,
            showAlert: false
        }
    }
    render(){
        return(
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search item name" />
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={()=>this.setState({showAlert:true})}>Clear</button>
                   
                </span>
            </div>
        )
    }
}
export default Search;