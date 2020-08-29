import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem  onClick={handleClose}><Link className="Menu-link" to="/">Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className="Menu-link" to="/about">About</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link className="Menu-link" to="/account">Account</Link></MenuItem>
          </Menu>
        </div>
      );
    }