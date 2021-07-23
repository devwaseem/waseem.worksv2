import React from 'react';
import styled from "styled-components";


const WorkCard = ({ className, projectName, projectImage, onClick, projectType, ...rest }) => {
  return (
    <Container 
      className={className} 
      {...rest}
      data-cursor-type='hover'
      onClick={onClick}
    >
      <CardImageContainer>
        <CardImage 
          src={projectImage}
        />
        <ProjectTypeTextContainer>
          <ProjectTypeText>{projectType}</ProjectTypeText>
        </ProjectTypeTextContainer>
      </CardImageContainer>
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
`;

const CardImage = styled.img`
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
  font-weight: bold;
  margin-top: 8px;
`

export default WorkCard;