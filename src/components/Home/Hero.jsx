import React from 'react'
import styled from "styled-components"
import WavingHand from '../../images/waving.gif'

const HomeHero = () => (
  <main data-scroll-section>
    <HiEmoji>
        <img src={WavingHand}/>
      </HiEmoji>
      
      <Title data-scroll data-scroll-speed="1">
        Hey there *waves*, my name is Waseem, developer, designer and minimalist.
      </Title>
      
      <Description>
        I specialize in crafting high performing, beautiful iOS apps that are pixel perfect and user friendly. From Quality of code to a great User Experience, I strive for everything. I've been making iOS apps for over 4 years and i share my journey on my 
        {' '}
        <TextLink href='https://www.instagram.com/dvlp.er/' target="_blank" data-cursor-type="hover">
          Instagram
        </TextLink>
        {' '}
        and i make open source apps too which is hosted on my 
        {' '}
        <TextLink href='https://github.com/devwaseem' target="_blank" data-cursor-type="hover">
          Github
        </TextLink>. 
      </Description>

      <HowCanIHelpText>
        But enough about me, How can i help you?
      </HowCanIHelpText>

      <EmailLink 
        href="mailto:hello@waseem.works" 
        data-cursor-type="hover"
      >
        hello@waseem.works
      </EmailLink>
  </main>
)


const HiEmoji = styled.div`
  font-size: 36px;
  margin-top: 120px;
`;

const Title = styled.h1`
  font-size: 59px;
  font-weight: bold;
  margin-top: 40px;
  max-width: 800px;
  line-height: 1.2;

  @media(max-width: 479px) {
    font-size: 32px;
  }

  @media(max-width: 767px) {

  }

  @media(max-width: 991px) {

  }
`;

const Description = styled.p`
  margin-top: 46px;
  font-size: 22px;
  max-width: 750px;
  line-height: 34px;
  @media(max-width: 479px) {
    font-size: 18px;
    line-height: 28px;
  }
`

const HowCanIHelpText = styled.p`
  margin-top: 22px;
  font-size: 22px;
  max-width: 850px;
  line-height: 34px;
  margin-bottom: 60px;
  @media(max-width: 479px) {
    font-size: 18px;
    line-height: 28px;
  }
`
const TextLink = styled.a`
  color: black;
  ${'' /* @media (prefers-color-scheme: dark) {
    color: white;
  } */}
`;

const EmailLink = styled.a`
  font-size: 22px;
  line-height: 34px;
  color: black;
  ${'' /* @media (prefers-color-scheme: dark) {
    color: white;
  } */}

  @media(max-width: 479px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export default React.memo(HomeHero);