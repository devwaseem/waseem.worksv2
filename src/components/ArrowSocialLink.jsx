import React, {useState} from 'react'
import styled from 'styled-components'

const ArrowSocialLink = ({text, url, className}) => (
  <Container 
    className={className}
    data-cursor-type="hover"
    href={url}
  >
    <ArrowContainer 
      viewBox="0 0 8 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 1.00011L1 7" stroke="#58585F" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 5.99998L7 1.00008L2 1.00008" stroke="#58585F" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
    </ArrowContainer>
    <Text>{text}</Text>
  </Container>
)

const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`

const ArrowContainer = styled.svg`
  width: 22px;
  height: 20px;
  transform-origin: center;
`

const Text = styled.p`
  color: #58585F;
  font-size: 20px;
  margin-left: 16px;
`;

export default ArrowSocialLink;