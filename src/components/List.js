import React, {Component} from 'react'

class List extends Component {
    
    render() {
        return(
            <div>
                                
                Description: {this.props.description} <br/>
                Amount: ${this.props.amount} <br/>
                Date: {this.props.date} <br/>
                <hr></hr>
                
            </div>
        )
    }
}

export default List;