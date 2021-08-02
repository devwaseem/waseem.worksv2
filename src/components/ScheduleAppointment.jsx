import React, { useEffect, useState } from 'react';
import SendEnquiryButton from './SendEnquiryButton'
import styled from 'styled-components';
import { openPopupWidget } from "react-calendly";


// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

const ScheduleAppointment = () => {

  // const [name, setName] = useState('');
  // const [service, setService] = useState('');
  // const [email, setEmail] = useState('');
  // const [isEmailValid, setIsEmailValid] = useState(true);
  // const [isValidName, setIsValidName] = useState(true);
  // const [isValidService, setIsValidService] = useState(true);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (email !== '') {
  //     setIsEmailValid(validateEmail(email))
  //   } else {
  //     setIsEmailValid(true)
  //   }
  // }, [email]);

  // function onSubmit() {
    
  //   if (name === '' || name.length < 3) {
  //     return setIsValidName(false);
  //   } else {
  //     setIsValidName(true);
  //   }

  //   if (service === '' || service.length < 3) {
  //     return setIsValidService(false);
  //   } else {
  //     setIsValidService(true);
  //   }

  //   if (email === '' || !validateEmail(email)) {
  //     return setIsEmailValid(false);
  //   } else {
  //     setIsEmailValid(true);
  //   }

  //   // var formdata = new FormData();
  //   // formdata.append(, name);
  //   // formdata.append(, service);
  //   // formdata.append(, email);

  //   var requestOptions = {
  //     method: 'POST',
  //     body: {
  //       "entry.641075049": name,
  //       "entry.743384757": service,
  //       "entry.2133125759": email,
  //     },
  //   };

  //   setLoading(true);
  //   fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjfi-CBDvaizuiI95mSyfUUTgIZOim23qd46ymxNmqqK2-0Q/formResponse", requestOptions)
  //   .then(result => {
  //     console.log(result)
  //     alert('Your Appointment request has been sent!. Please check your mail further details')
  //     setLoading(false);
  //     setName('');
  //     setService('');
  //     setEmail('');
  //   })
  //   .catch(error => {
  //     alert("Something went wrong while submitting your request. Please try again")
  //     setLoading(false);
  //     console.log(error);
  //   });

  // }

  function onSubmit() {
    openPopupWidget({
      url: 'https://calendly.com/waseem_works/30min',
    })
  }

  return (
    <Container>
      <ScheduleAppointmentText>
            Schedule a Free 30 min call.
      </ScheduleAppointmentText>
      
      <SendEnquiryButton 
        text="Schedule"
        onClick={onSubmit}
      />
      {/* <AppointmentForm>
        <AppointmentText>
          Hey,
        </AppointmentText>
        <AppointmentText>
          my
        </AppointmentText>
        <AppointmentText>
          name
        </AppointmentText>
        <AppointmentText>
          is
        </AppointmentText>
        <AppointmentInput 
          isValid={isValidName}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <AppointmentText>
          and
        </AppointmentText>
        <AppointmentText>
          I’m
        </AppointmentText>
        <AppointmentText>
          looking 
        </AppointmentText>
        <AppointmentText>
          for
        </AppointmentText>
        <AppointmentPicker
          isValid={isValidService}
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option> </option>
          <option>iOS App</option>
          <option>Webflow website</option>
        </AppointmentPicker>
        <AppointmentText>
          Get in touch with me at
        </AppointmentText>
        <AppointmentInput 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          isValid={isEmailValid}
        />
        <AppointmentText>
          !
        </AppointmentText>
      </AppointmentForm>
      <SendEnquiryButton 
        isLoading={isLoading}
        text="SEND ENQUIRY"
        onClick={onSubmit}
      /> */}
      </Container>
  )
};

const Container = styled.div`
  margin-top: 140px;
`;


const ScheduleAppointmentText = styled.h2`
  font-size: 52px;
  font-weight: 500;
  @media(max-width: 767px) {
    font-size: 42px;
  }
`;

const AppointmentForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1000px;
  margin-top: 80px;

  @media(max-width: 767px) {
    font-size: 42px;
    margin-top: 60px;
  }
`

const AppointmentText = styled.p`
  font-size: 24px;
  padding-left: 3px;
  padding-right: 3px;
  font-weight: 500;
`;

const AppointmentInput = styled.input`
  font-size: 24px;
  font-weight: 500;
  max-width: 600px;
  min-width: 200px; 
  border: 0;
  border-bottom: 2px solid ${props => props.isValid ? 'black' : 'red'};
  margin-left: 8px;
  margin-right: 8px;
  height: 32px;
  padding-bottom: 0px;

  &:focus{
    outline: none;
  }

`

const AppointmentPicker = styled.select`
  font-size: 24px;
  font-weight: 500;
  max-width: 600px;
  min-width: 200px; 
  border: 0;
  border-bottom: 2px solid ${props => props.isValid ? 'black' : 'red'};
  margin-left: 8px;
  margin-right: 8px;
  height: 32px;
  padding-bottom: 0px;
  
  &:focus{
    outline: none;
    cursor: pointer;
  }
`



export default ScheduleAppointment;