import React from 'react'
import styled from 'styled-components';
import ArrowSocialLink from './ArrowSocialLink';
import MadeInIndiaCircularBadge from './MadeInIndiaCircularBadge';
import ScheduleAppointment from './ScheduleAppointment'

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
          url="https://twitter.com/iamwaseem99"
        />
        <ArrowSocialLinkStyled
          text="INSTAGRAM"
          url="https://www.instagram.com/dvlp.er/"
        />
        <ArrowSocialLinkStyled
          text="LINKEDIN"
          url="https://www.linkedin.com/in/devwaseem/"
        />
      </SocialMediaLinksContainer>

      <LocationContainer>
        <LocationText>
          Chennai, IN
        </LocationText>
        <LocationText>
          13.0827° N, 80.2707° E
        </LocationText>
      </LocationContainer>
      <ScheduleAppointment />
      
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

const CurrentlyAvailableText = styled.h2`
  font-size: 52px;
  font-weight: 500;
  max-width: 750px;

  @media(max-width: 767px) {
    font-size: 32px;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    font-size: 80px;
  }
`

const EmailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
  margin-top: 32px;
`;

const EmailAddressText = styled.a`
  font-size: 26px;
  font-weight: 400;
  color: black;
`

const SocialMediaLinksContainer = styled.div`
  margin-top: 140px;
  max-width: 400px;
`;

const ArrowSocialLinkStyled = styled(ArrowSocialLink)`
  margin-bottom: 20px;
  height: 24px;
`;

const LocationContainer = styled.div`
  margin-top: 140px;
`;

const LocationText = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 8px;
`;


const MadeInIndiaBadge = styled(MadeInIndiaCircularBadge)`
  width: 100px;
  height: 100px;
  margin-top: 140px;
`;


const CopyrightText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 140px;
  font-weight: 400;
`;


export default Footer;