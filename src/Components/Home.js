import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='background'>
                <h1>Big <span className="Menu-link">Ass</span> Pumpkins</h1>
                <h4>This is going to be harder than I thought</h4>


            </div>
        )
    }

}

export default HomeContainer;