import './App.css';
import React from 'react'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './views/Home/Home'
import LogIn from './views/LogIn/LogIn';
import Viaje from './views/Viaje/Viaje';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <>
    {}
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />}/> 
        <Route path="/home" element={<Home />} />
        <Route path="/viaje" element={<Viaje />} />  
      </Routes>
    </Router>
  </>
  );
}

export default withAuthenticator(App);
