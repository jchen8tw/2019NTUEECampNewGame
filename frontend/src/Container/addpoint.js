import React,{Component} from 'react';
export default class extends Component{
    render(){
        return <p>{this.props.match.params.stagename}</p>
    }
}