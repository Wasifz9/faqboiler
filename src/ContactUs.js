import React from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Typography} from '@material-ui/core';
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('', '', e.target, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className = 'section'>
        <form className="contact-form">
            <Typography variant = 'h6' color = "secondary" >Any extra questions?</Typography>
            <TextField id="standard-basic" label="Name" name="user_name"/>
            <br/>
            <TextField id="standard-basic" label="Email" name="user_email"/>
            <br/>
            <TextField id="standard-basic" label="Phone #" name="phone_num"/>
            <br/>
            <br/>
            <TextField
                id="standard-basic"
                label="Message"
                multiline
                rows={5}
                variant="outlined"
                name = "message"
                color = "secondary"
            />

            <div style = {{marginTop:20 + 'px'}}> 
                <Button  variant="contained" color="secondary" type = 'submit' value = 'Send'> 
                    Submit
                </Button>
            </div>
        </form>
    </div> 
  );
}