import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component{
    state={count:0}
    increment=()=>{
        this.props.dispatch({type:'INCREMENT'});
    }
    decrement=()=>{
        this.props.dispatch({type:'DECREMENT'});
    }
    reset=()=>{
        this.props.dispatch({type:'RESET'})
    }
    render(){
        return(
            <div>
                <h2 class="fw-bold">Counter</h2>
                <div style={{backgroundColor: "#00CCFF"}} class="p-3">
                    <span className="border border-white text-white p-1">{this.props.count}</span>
                    <button class="mx-2" onClick={this.decrement}>-</button>
                    <button class="mx-2" onClick={this.increment}>+</button>
                    <button class="mx-2" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);