import React from 'react'
import styled from 'styled-components'

const SendEnquiryButton = ({text, onClick}) => {

  return (
    <Container>
      <Text>{text}</Text>
      <ArrowContainer 
        viewBox="0 0 8 8" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M7 1.00011L1 7" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 5.99998L7 1.00008L2 1.00008" stroke="white" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
    </ArrowContainer>
    </Container>
  )
  
}

const Container = styled.div`
  background-color: black;
  width: 220px;
  height: 60px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 12px;
  padding-left: 12px;
  user-select: none;
`

const Text = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  flex: 1;
`;

const ArrowContainer = styled.svg`
  width: 8%;
  margin-right: 12px;
`

export default React.memo(SendEnquiryButton);