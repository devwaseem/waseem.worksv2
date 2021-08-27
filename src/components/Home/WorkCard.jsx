import React, { useState } from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';

const WorkCard = ({ className, projectName, projectImage, onClick, projectType, ...rest }) => {
  const [isHovering, setHovering] = useState(false);
  return (
    <Container 
      className={className} 
      {...rest}
      data-cursor-type='hover'
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <CardImageContainer>
        <CardImage
          src={projectImage}
          animate={{ scale: isHovering ? 1 : 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </CardImageContainer>
      <ProjectTypeTextContainer>
        <ProjectTypeText>{projectType}</ProjectTypeText>
      </ProjectTypeTextContainer>
      <ProjectNameText>{projectName}</ProjectNameText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`

const CardImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectTypeTextContainer = styled.div`
  background-color: red;
  width: 93%;
  height: auto;
  position: absolute;
  right: -51%;
  transform: rotate(90deg) translateX(50%);

  @media(max-width: 767px) {
    width: 83%;
  }
`;

const ProjectTypeText = styled.p`
  width: 100%;
  height: 20px;
  margin: 0px;
  padding: 0px;
  position: absolute;
  letter-spacing: 0.33em;
  font-size: 12px;
  font-weight: 400;
  color: #58585F;
  text-align: right;
  @media(max-width: 767px) {
    font-size: 10px;
  }
`

const ProjectNameText = styled.p`  
  padding: 0px;
  margin: 0px;
  font-size: 22px;
  font-weight: 500;
  margin-top: 12px;
`

export default WorkCard;