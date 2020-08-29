import React, { useState } from 'react';
import {connect} from 'react-redux';

function AccountInput({ }) {

    const [accountValues, setAccountValue] = useState({userName:'', password:''})
    const handleChange = (event, propertyName) => {
        setAccountValue({
            userName: accountValues.userName,
            password: accountValues.password,
            [propertyName]: event.target.value,
        })
    }

    return (
        <div>
            <input
                placeholder={"Please Enter Username"}
                value={accountValues.userName}
                onChange={(event) => handleChange(event, 'userName')}
            />
            <input
                placeholder={"Please Enter Password"}
                value={accountValues.upassword}
                onChange={(event) => handleChange(event, 'password')}
            />
            
        </div>
    )
}



//   class AccountContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }


//     render() {
//         return (
//             <div className='background'>
//                 <h1>This is the account profile page</h1>
//                 <h4>We like pumpkins, but we want to talk about all of them</h4>


//             </div>
//         )
//     }

// }

export default AccountInput;