import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../css/contact.css';

function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'primary.main',
    },
    button: {
      width: '300px',
      flexGrow: 1,
      fontFamily: 'Merriweather',
      fontSize: '15px',
      textTransform: 'uppercase',
    },
  }));

  const [sender, setSender] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [senderError, setSenderError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(0);

  const serverURL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SERVER_PRODUCTION
      : process.env.REACT_APP_SERVER_DEVELOPMENT;

  const initialize = () => {
    setSenderError(false);
    setAddressError(false);
    setMessageError(false);
    setIsSuccess(false);
  };

  const checkData = () => {
    const regAddress = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const regSender = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    // console.log('address from form: ', address);
    // console.log('sender from form: ', sender);
    // console.log('message from form: ', message);

    let msgErr = '';
    let sndErr = '';
    let addErr = '';

    if (!sender.match(regSender)) {
      sndErr = 'Please provide your full name';
      setSenderError(sndErr);
    }

    if (!address.match(regAddress)) {
      addErr = 'Invalid email address';
      setAddressError(addErr);
    }

    if (message.length <= 10) {
      msgErr = 'Please enter more than 10 characters';
      setMessageError(msgErr);
    }

    if (sndErr || addErr || msgErr) {
      return false;
    } else return true;
  };

  const deliver = (e) => {
    e.preventDefault();

    initialize();

    const check = checkData();
    if (check) {
      setIsSuccess(true);
      sendMail();
    } else return;

   
  };

  const sendMail = () => { 
     var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: sender,
      email: address,
      message: message,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

      fetch(`${serverURL}/sendmail`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error.message));
    }
    
  
  const classes = useStyles();

  return (
    <>
      <div className="container">
        <div className="content960 col">
          <div id="NewChapter">contact me</div>

          <form name="contact" onSubmit={deliver}>
            <div className="bg col" style={{ textAlign: 'center' }}>
              <div className="col">
                <div>
                  <input
                    value={sender}
                    onChange={(event) => setSender(event.target.value)}
                    // onChange={(event) => console.log(event.target.value)}
                    name="sender"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div id="error">{senderError}</div>

                <div>
                  <input
                    type="email"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    name="address"
                    placeholder="Your email-address"
                    required
                  />
                </div>

                <div id="error">{addressError}</div>
              </div>

              <div>
                <div>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    name="message"
                    placeholder="What would you like to tell me ?"
                    required
                  />
                </div>

                <div id="error">{messageError}</div>
              </div>
              <div id="submit">
                <Button type="submit" variant="contained" color="secondary">
                  <Typography variant="h6" className={classes.button}>
                    send your message
                  </Typography>
                </Button>
              </div>
              {isSuccess ? (
                <div id="success">Your email was sent. Thank you</div>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
