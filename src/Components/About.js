import React from 'react';
import {connect} from 'react-redux';



  class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='background'>
                <h1>We're on a mission to grow large vegetables</h1>
                <h4>We like pumpkins, but we want to talk about all of them</h4>


            </div>
        )
    }

}

export default AboutContainer;