import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ParticlesGIF from '../../images/particles.gif'
import ConfettiCheckoutGIF from '../../images/confetti-project.gif'
import KineticClockGIF from '../../images/kinetic-clock.gif'
import openInNewTab from '../../Utilities/openInNewTab'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";


const worksData = [
  {
    title: 'Particle drivers',
    type: "iOS App / SwiftUI",
    source: "Github",
    image: ParticlesGIF,
    link: 'https://github.com/devwaseem/ParticleDrivers'
  },
  {
    title: 'Kinetic counter',
    type: "iOS App / SwiftUI",
    source: "Github",
    image: KineticClockGIF,
    link: 'https://github.com/devwaseem/KineticClockCounter'
  },
  {
    title: 'Confetti checkout',
    type: "iOS App / SwiftUI",
    source: "Github",
    image: ConfettiCheckoutGIF,
    link: 'https://github.com/devwaseem/Confetti-Checkout'
  },
]

const list = {
  visible: { 
    y: 0,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
  hidden: { y: -100 },
}

const dividerVariants = {
  visible: { x: 0 },
  hidden: { x: '-100%' },
}


const ProjectNameVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: '-50%', opacity: 0 },
}


const MoreWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container>
      <Title data-scroll data-scroll-direction="vertical" data-scroll data-scroll-speed="3">
        More
        {' '}
        <TitleSecondLine>Works.</TitleSecondLine>
      </Title>
      <Description>
        A collection of experimental work and other projects.
      </Description>

        <WorksListContainer
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={list}
      >
      {
        worksData.map((data) => (
          <>
            <WorksListCell
              key={data.title}
              title={data.title}
              type={data.type}
              source={data.source}
              imageSrc={data.image}
              imageWidth={650}
              imageHeight={650}
              onClick={() => openInNewTab(data.link)}
            />
            <Divider variants={dividerVariants} transition={{ duration: 1 }}/>
          </>
        ))
      }
      </WorksListContainer>
    </Container>
  )
}

const WorksListCell = ({ title, type, source, imageSrc, imageWidth=400, imageHeight=400, onClick }) => {
  return (
    <WorksListCellContainer 
      data-cursor-type="image"
      data-cursor-image={imageSrc}
      data-cursor-image-width={imageWidth}
      data-cursor-image-height={imageHeight}
      onClick={onClick}
    >
      <WorkListContentContainer>
        <ProjectNameText variants={ProjectNameVariants} transition={{ duration: 0.6 }}>
          { title }
        </ProjectNameText>
        <ProjectDataContainer variants={ProjectNameVariants} transition={{ duration: 0.6 }}>
          <ProjectDataText>{type}</ProjectDataText>
          <ProjectDataText>•</ProjectDataText>
          <ProjectDataText>{source}</ProjectDataText>
        </ProjectDataContainer>
      </WorkListContentContainer>
      <Arrow 
        variants={ProjectNameVariants} transition={{ duration: 1 }}
        viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 1.00011L1 7" stroke="black" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 5.99998L7 1.00008L2 1.00008" stroke="black" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      </Arrow>
    </WorksListCellContainer>
  )
}

const Container = styled.section`
  margin-top: 300px;
  margin-bottom: 300px;

  @media(max-width: 767px) {
    margin-top: 200px;
    margin-bottom: 200px;
  }
`;

const Title = styled.h2`
  margin-top: 100px;
  font-size: 172px;
  font-weight: bold;
  max-width: 800px;
  line-height: 1.2;

  @media(max-width: 767px) {
    font-size: 82px;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    font-size: 142px;
  }
`;

const TitleSecondLine = styled.span`
  margin-left: 200px;
  @media(max-width: 479px) {
    margin-left: 80px;
  }
`

const Description = styled.p`
  font-size: 20px;
  color: #58585F;
`

const WorksListContainer = styled(motion.div)`
  margin-top: 200px;
  width: 50vw;
  margin-left: 20vw;
  overflow: hidden;
  
  @media(max-width: 767px) {
    margin-top: 80px;
    margin-left: 0;
    width: 100%;
  }
`;

const WorksListCellContainer = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  overflow: hidden;
`;
const Divider = styled(motion.div)`
  width: 100%;
  height: 2px;
  background-color: black;
`

const Arrow = styled(motion.svg)`
  width: 26px;
  height: 26px;
  @media(max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;

const WorkListContentContainer = styled.div`
  ${'' /* background-color: blue; */}
  flex: 1;
`

const ProjectNameText = styled(motion.p)`
  font-size: 42px;
  margin: 0px;
  padding: 0px;
  margin-bottom: 16px;
  font-weight: 500;
  @media(max-width: 767px) {
    font-size: 30px;
  }
`;

const ProjectDataContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  margin-bottom: 12px;
`;

const ProjectDataText = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: rgb(28,28,28);
  margin-right: 12px;
`;


export default React.memo(MoreWorks);



// {
//           isHovering 
//           && (
//             <PeakImage 
//               src={NYTimesCover}
//               animate={{ x: peakImagePosition.x, y: peakImagePosition.y }}
//               initial={{ opacity: 0 }}
//               enter={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />
//           )
//         }