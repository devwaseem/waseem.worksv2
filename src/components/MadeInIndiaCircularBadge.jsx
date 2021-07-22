import React, { useState } from 'react'
import styled from 'styled-components'
import MadeInIndiaImage from '../images/made_in_india.png'
import IndiaImage from '../images/india.png'
import { motion } from 'framer-motion'

const MadeInIndiaCircularBadge = ({className, scrollOffset}) => {
  return (
    <Container 
      className={className}      
    >
        <MadeInIndiaCircularImage  
          animate={{ rotate: scrollOffset / 3 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          src={MadeInIndiaImage}
        />
        <IndiaImageView 
          src={IndiaImage}
        />
    </Container>
  )
}


const Container = styled.div`
  position: relative;
`;

const MadeInIndiaCircularImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
`;


const IndiaImageView = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
  position: absolute;
  left: 25%;
  top: 25%;
  
`;


export default React.memo(MadeInIndiaCircularBadge);