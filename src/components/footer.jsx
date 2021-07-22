import React from 'react'
import styled from 'styled-components';
import ArrowSocialLink from './ArrowSocialLink';
import SendEnquiryButton from './SendEnquiryButton'
import MadeInIndiaCircularBadge from './MadeInIndiaCircularBadge';

const Footer = ({ scrollOffset }) => {

  return (
    <Container id="footer">
      <CurrentlyAvailableText data-scroll data-scroll-speed="1">
        I’m currently available for freelance projects. Let’s work together to create something worth sharing.
      </CurrentlyAvailableText>
      <EmailText>
        Email address
      </EmailText>
      <EmailAddressText href="mailto:hello@waseem.works" data-cursor-type="hover">
        hello@waseem.works
      </EmailAddressText>

      <SocialMediaLinksContainer>
        <ArrowSocialLinkStyled
          text="GITHUB"
          url="https://github.com/devwaseem"
        />
        <ArrowSocialLinkStyled
          text="TWITTER"
          url="https://github.com/devwaseem"
        />
        <ArrowSocialLinkStyled
          text="INSTAGRAM"
          url="https://github.com/devwaseem"
        />
        <ArrowSocialLinkStyled
          text="LINKEDIN"
          url="https://github.com/devwaseem"
        />
      </SocialMediaLinksContainer>

      <LocationContainer>
        <LocationText>
          Chennai, IN
        </LocationText>
        <LocationText>
          7M52464X+C5
        </LocationText>
      </LocationContainer>
      <ScheduleAppointmentText>
        Schedule an Appointment
      </ScheduleAppointmentText>
      <ScheduleAppointmentContainer>
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
        <AppointmentPicker>
          <option> </option>
          <option>iOS App development</option>
          <option>Webflow website development</option>
        </AppointmentPicker>
        <AppointmentText>
          Get in touch with me at
        </AppointmentText>
        <AppointmentInput 
          
        />
        <AppointmentText>
          !
        </AppointmentText>
      </ScheduleAppointmentContainer>
      <SendEnquiryButton 
        text="SEND ENQUIRY"
      />

      <MadeInIndiaBadge scrollOffset={scrollOffset} />

      <CopyrightText>
        © 2021 Waseem Akram.
      </CopyrightText>
    </Container>
  )
};




const Container = styled.section`
  width: auto;
  
`

const CurrentlyAvailableText = styled.p`
  font-size: 52px;
  font-weight: bold;
  max-width: 750px;

  @media(max-width: 767px) {
    font-size: 32px;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    font-size: 80px;
  }
`

const EmailText = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-top: 24px;
`;

const EmailAddressText = styled.a`
  font-size: 22px;
  font-weight: 400;
  color: #58585F;
`

const SocialMediaLinksContainer = styled.div`
  margin-top: 140px;
  max-width: 400px;
`;

const ArrowSocialLinkStyled = styled(ArrowSocialLink)`
  margin-bottom: 20px;
  height: 24px;
`;

const LocationContainer = styled.p`
  margin-top: 140px;
`;

const LocationText = styled.p`
  color: #58585F;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 8px;
`;


const ScheduleAppointmentText = styled.p`
  margin-top: 140px;
  font-size: 52px;
  font-weight: bold;

  @media(max-width: 767px) {
    font-size: 42px;
  }
`;

const ScheduleAppointmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
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
  border-bottom: 2px solid black;
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
  border-bottom: 2px solid black;
  margin-left: 8px;
  margin-right: 8px;
  height: 32px;
  padding-bottom: 0px;
  
  &:focus{
    outline: none;
    cursor: pointer;
  }
`
const MadeInIndiaBadge = styled(MadeInIndiaCircularBadge)`
  width: 100px;
  height: 100px;
  margin-top: 140px;
`;


const CopyrightText = styled.p`
  font-size: 20px;
  margin-top: 140px;
`;
export default Footer;