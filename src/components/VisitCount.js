import React from 'react';
import {GrView} from 'react-icons/gr';


class VisitCount extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    }
    componentDidMount(){
        this.setState(prevState => ({count : prevState.count + 1}));
    }

    render(){
    return (
        <div className="">
           <GrView size = {15}/>&nbsp; {this.state.count}
        </div>
    )
}
}

export default VisitCount;
