import './App.css';
import React, {useState} from 'react'
import {Routes, BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './views/Home/Home'
import Viaje from './views/Viaje/Viaje';
import Header from './views/Header/Header.js';
import Profile from './views/Header/Profile';
import InputImage from './views/Viaje/InputImage';
import AceptoViaje from './views/AceptoViaje/AceptoViaje';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);


function App({ signOut, user }) {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home theUser={user}/>} />
        <Route path="/viaje" element={<Viaje theUser={user}/>} /> 
        <Route path="/profile" element={<Profile theUser={user} out={signOut}/>} />  
        <Route path="/uploadImage" element={<InputImage theUser={user}/>} />
        <Route path="/aceptoViaje" element={<AceptoViaje theUser={user}/>} />
      </Routes>
    </Router>
  </>
  );
}

export default withAuthenticator(App);
