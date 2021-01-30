import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';

function ListItem(props) {
    const heightRef = useRef();
    const [isOpen, Opener] = useState(false);
    

    if (heightRef.current) console.log(heightRef.current.scrollHeight)
    
    return (
        <div className="listItem">
            <Button  variant="contained" color="secondary" onClick = {()=> Opener(!isOpen)}>
                {props.buttonLabel}
            </Button>

            <div 
                className = 'collapsible'
                ref = {heightRef}
                style = {
                    isOpen 
                    ?{
                        height: heightRef.current.scrollHeight + 'px',
                    } :
                    {
                        height: "0px"
                    }

                }
            > 
                <h3> {props.info} </h3>
            </div> 
        </div>
    );

}

export default ListItem;