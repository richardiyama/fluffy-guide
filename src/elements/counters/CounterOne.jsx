import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';

class CounterOne extends Component{
    constructor(props) {
        super(props)
        this.state = {
        didViewCountUp: false,
        counterups:[]
    };
}
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    componentDidMount() {
        
        this.CounterupList();
       
      }
    CounterupList(){
        axios.get('http://eaz-roc.ng/api/counterups/').then(res => res.data)
        .then(res => {
            this.setState({
                counterups: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
        }
    render(){
       

        return(
            <Fragment>
                <div className="row">
                {this.state.counterups.map(counterup =>
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12">
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? counterup.counter_num : 0} />
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{counterup.title}</p>
                        </div>
                    )}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;