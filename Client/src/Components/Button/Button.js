import React from 'react';
import './Button.css';
import {Button,} from "react-bootstrap";


function Btn(props){
    return(
        <Button 
        style={{
            width:props.width,
            color:props.color,
            fontWeight:props.fontWeight,
        }}
        className={props.className}>
            {props.text}
            {props.children}
        </Button>
    )
}

export default Btn;