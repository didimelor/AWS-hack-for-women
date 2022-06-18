import React, {useState} from 'react'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import Header from "./Header.js"
import './Header.css'

export default function Profile(props){
    console.log(props.theUser.attributes.name)
    return(
        <>
        < Header />
        <div className="profileBody">
            <h1>Profile</h1>
            <h2>Nombre: {props.theUser.attributes.name}</h2>
            <h2>Email: {props.theUser.attributes.email}</h2>
            <Button onClick={props.out}>Sign out</Button>
        </div>
        
        </>
    );
}