import React from 'react'
import styled from "styled-components"

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
  padding-bottom: 300px;
`



export default React.memo(SelectedWorks);