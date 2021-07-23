import React from 'react'
import styled from "styled-components"
import WorkCard from './WorkCard';
import NYTimesCover from '../../images/NYTimes-cover.png'
import KlipKutterImage from '../../images/Klip kutter.png'
import FacepassImage from '../../images/facepass_mock.png'
import openInNewTab from '../../Utilities/openInNewTab'

const SelectedWorks = () => (
  <section>  
      <Title data-scroll data-scroll-direction="vertical" data-scroll data-scroll-speed="3">
        Selected
        {' '}
        <TitleSecondLine>Works.</TitleSecondLine>
      </Title>
      <Description>
        These are some of my recent favorites – 
        <br />
        always subject to change.
      </Description>
      <WorkCardContainer>
        <WorkCardLeft
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          projectName="NYTimes"
          projectType="MOBILE APP"
          projectImage={NYTimesCover}
          onClick={() => openInNewTab('https://github.com/TheCodeMonks/NYTimes-iOS')}
        />
        <WorkCardRight
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
          projectName="Klip Kutter"
          projectType="MOBILE APP"
          projectImage={KlipKutterImage}
          onClick={() => openInNewTab('https://www.producthunt.com/posts/klip-kutter')}
        />
        <WorkCardLeft
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          projectName="Facepass"
          projectType="MOBILE APP"
          projectImage={FacepassImage}
          onClick={() => openInNewTab('https://github.com/devwaseem/FacePass')}
        />
      </WorkCardContainer>
  </section>
)


const Title = styled.h2`
  margin-top: 100px;
  font-size: 160px;
  font-weight: bold;
  max-width: 800px;
  line-height: 1.2;

  @media(max-width: 767px) {
    font-size: 60px;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    font-size: 120px;
  }
`;

const TitleSecondLine = styled.span`
  margin-left: 200px;
  @media(max-width: 479px) {
    margin-left: 80px;
  }
`

const Description = styled.p`
  font-size: 16px;
  color: #58585F;
  
`

const WorkCardContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`

const WorkCardLeft = styled(WorkCard)`
  width: 600px;
  height: 600px;
  margin-top: 200px;

  @media(max-width: 767px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    width: 450px;
    height: 450px;
  }
`;

const WorkCardRight = styled(WorkCard)`
  width: 600px;
  height: 600px;
  margin-left: 30vw;
  margin-top: 200px;

  @media(max-width: 767px) {
    width: 250px;
    height: 250px;
    margin-left: 18vw;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    width: 450px;
    height: 450px;
  }

`;

export default React.memo(SelectedWorks);