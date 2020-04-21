import React from 'react';
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
                <h1>Big Ass Pumpkins</h1>
                <h4>This is going to be harder than I thought</h4>


            </div>
        )
    }

}

export default HomeContainer;