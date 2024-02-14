import React, { useState } from 'react';
import { AppBar, Tab, Toolbar, Typography, Tabs } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { NavLink } from 'react-router-dom';
import logo from '../Images/Logo.jpg'


const Header = () => {
  const [value, setValue] = useState(0); 

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'green' }} position='sticky'>
        <Toolbar>
          
          <img src={logo} width={110}/>
          <Typography variant='h4'> Library Management System </Typography>

          <Tabs
            sx={{ ml: 'auto' }}
            textColor='inherit'
            indicatorColor='primary'
            value={value} // Set the value prop to control the active tab
            onChange={(e, val) => setValue(val)}
          >
             <Tab LinkComponent={NavLink} to='Home' label='Home' />
            <Tab LinkComponent={NavLink} to='SignIn' label='SignIn' />
            <Tab LinkComponent={NavLink} to='Signup' label='Signup' />
            <Tab LinkComponent={NavLink} to='Admin' label='Admin' />
             {/* <Tab LinkComponent={NavLink} to='Appointment' label='Appointment' /> */}
            <Tab LinkComponent={NavLink} to='FetchRegistrations' label='FetchRegistrations' />
            {/* <Tab LinkComponent={NavLink} to='Contact' label='Contact' />  */}
 

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;