import React from 'react';
import {connect} from 'react-redux';


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='background'>
                <h1>Big Ass Pumpkins</h1>


            </div>
        )
    }

}

export default connect(HomeContainer);