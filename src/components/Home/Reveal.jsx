import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {motion} from 'framer-motion'

const HomeReveal = () => {

  const [shouldClose, setShouldClose] = useState(false);
  const [isRevealComplete, setIsRevealComplete] = useState(false)
  useEffect(() => {
    setTimeout(() => {
        setShouldClose(true);
        setTimeout(() => {
          setIsRevealComplete(true);
        }, 1500);
    }, 2400);
  });

  if (isRevealComplete) {
    return null;
  }

  return (
    <Container>
      <Cover 
        animate={{ y: shouldClose ? '100vh': '0' }}
        transition={{
          delay: 0,
          duration: 0.8,
          ease: "easeOut"
        }}
        />
      <Cover 
        animate={{ y: shouldClose ? '100vh': '0' }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeOut"
        }}
      />
      <Cover 
        animate={{ y: shouldClose ? '100vh': '0' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut"
        }}
      />
      <Cover 
        animate={{ y: shouldClose ? '100vh': '0' }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeOut"
        }}
      />
      <TextContainer>
        <Text
          initial="initial"
          animate={shouldClose ? "hidden" : "visible"}
          variants={textAnimationVariants}
          transition={{
            delay: shouldClose ? 0 : 0.6,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          Developer,
        </Text>
        <Text
          initial="initial"
          animate={shouldClose ? "hidden" : "visible"}
          variants={textAnimationVariants}
          transition={{
            delay: shouldClose ? 0.2 : 0.9,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          designer,
        </Text>
        <Text
          initial="initial"
          animate={shouldClose ? "hidden" : "visible"}
          variants={textAnimationVariants}
          transition={{
            delay: shouldClose ? 0.3 : 1.2,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          minimalist.
        </Text>
      </TextContainer>
    </Container>
  )
}

const textAnimationVariants = {
  initial: {
    y: '250%',
    rotate: 10
  },
  visible: {
    y: 0,
    rotate: 0
  },
  hidden: {
    y: '300%',
    rotate: -16
  }
}


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
`

const Cover = styled(motion.div)`
  width: 50%;
  height: 100%;
  background: black;
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  overflow: hidden;
`

const Text = styled(motion.p)`
  font-size: 20px;
  margin-right: 10px;
  color: white;
  font-weight: 500;
`


export default React.memo(HomeReveal);