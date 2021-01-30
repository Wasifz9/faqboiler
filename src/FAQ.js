import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import ListItem from "./ListItem.js"
import Typography from '@material-ui/core/Typography';
function FAQ() {
    const heightRef = useRef();
    return (
        <div className="FAQ">
            <Typography variant = 'h2' color = "secondary">FAQ</Typography>

            <ListItem 
                buttonLabel ='who?' 
                info = 'Created a cognitive data analytic and decision support pipeline for classifying noisy medical data based on schema and ministry specified guidelines using both a rule based and a neural network approach to identify reportable critical diseases [Lucas Rychlo].'
            />
            <ListItem 
                buttonLabel ='what?'
                info = 'Created a cognitive data analytic and decision support pipeline for classifying noisy medical data based on schema and ministry specified guidelines using both a rule based and a neural network approach to identify reportable critical diseases [Lucas Rychlo].'
            />
            <ListItem 
                buttonLabel ='when?'
                info = 'Created a cognitive data analytic and decision support pipeline for classifying noisy medical data based on schema and ministry specified guidelines using both a rule based and a neural network approach to identify reportable critical diseases [Lucas Rychlo].'
        
            />
            <ListItem 
                buttonLabel ='where?' 
                info = 'Created a cognitive data analytic and decision support pipeline for classifying noisy medical data based on schema and ministry specified guidelines using both a rule based and a neural network approach to identify reportable critical diseases [Lucas Rychlo].'
            />
            <ListItem 
                info = 'Created a cognitive data analytic and decision support pipeline for classifying noisy medical data based on schema and ministry specified guidelines using both a rule based and a neural network approach to identify reportable critical diseases [Lucas Rychlo].'
                buttonLabel ='why?' 
            />
        </div>
    );

}

export default FAQ;
