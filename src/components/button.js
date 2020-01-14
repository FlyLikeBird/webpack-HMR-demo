import React from 'react';

export default class ButtonComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    render(){
        return (
            <div>
                <button onClick={()=>this.setState({count:++this.state.count})}>click 33</button>
                { this.state.count }
            </div>
        )
    }
}


