import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LogoWhite from '../images/logo-white.svg'
import LogoBlack from '../images/logo-black.svg'
import LinkTextWithArrow from '../components/LinkTextWithArrow';
import Cursor from '../components/Cursor'
import Footer from '../components/footer';
import { AnimatePresence, motion } from 'framer-motion';
import useDeviceDetect from '../Utilities/useDeviceDetect'

var scroll;
const MainLayout = ({children, RevealView}) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  const containerRef = useRef(null);
  const [isRevealComplete, setRevealComplete] = useState(false);

  const { isMobile } = useDeviceDetect();
  const [hasMounted, setHasMounted] = useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    // let scroll;
    import('locomotive-scroll').then((locomotiveModule)=> {
      scroll = new locomotiveModule.default({
        el: containerRef.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        }
      })

      scroll.on('scroll', (args) => {
        const { limit, scroll } = args;
        const percentage = Math.min(1.0, (scroll.y/limit.y).toFixed(3))
        setScrollOffset(scroll.y);
        setPercentageScrolled(percentage);
      })
    })
    

  return () => {
    scroll?.destroy()
  }

  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {
        RevealView && !isRevealComplete &&
        <RevealView onRevealComplete={() => setRevealComplete(true)}/>
      }
      <SEO title="Waseem | iOS Developer" ></SEO>
      {
        !isMobile && 
        <Cursor/>
      }
      <AppContainer 
        ref={containerRef}
        data-scroll-container
      >
        <LeftBar>
          <Link to='/'>
            <Logo />
          </Link>
          <ProgressBarContainer>
            <ProgressBarTrack/>
            <ProgressBar percentage={percentageScrolled}/>
          </ProgressBarContainer>
          <ContactButton>
            <p>Folio 2021</p>
          </ContactButton>
        </LeftBar>
        <ContentContainer data-scroll-section>
        <TopNavBar>
          {/* <NavLink 
            to='/' 
            data-cursor-type="hover" >
            about
          </NavLink> */}
          <NavButton
            data-cursor-type="hover" 
            onClick={() => scroll?.scrollTo('#footer')}
          >
            contact
          </NavButton>
        </TopNavBar>
          {children}
        <Footer 
          scrollOffset={scrollOffset}
        />
        </ContentContainer>
        <AnimatePresence>
          {
            percentageScrolled > 0.2 
            && (
              <BackToTopButton 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scroll?.scrollTo("top")}
              >
                Back to Top
              </BackToTopButton>
            )}
        </AnimatePresence>
      </AppContainer>
    </>
  )
}


const AppContainer = styled.div`
  width: 100vw;
`;

const Logo = styled.div`
  background-image: url(${LogoBlack});
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background-repeat: no-repeat;
  ${'' /* @media (prefers-color-scheme: dark) {
    background-image: url(${LogoWhite});
  } */}
`

const TopNavBar = styled.div`
  height: 50px;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
`;

const NavLink = styled(Link)`
  color: black;
  margin-left: 40px;
  text-decoration: none;
  ${'' /* @media (prefers-color-scheme: dark) {
    color: white;
  } */}
`;

const NavButton = styled.p`
  color: black;
  margin-left: 40px;
`;


const LeftBar = styled.div`
  width: 64px;
  height: 86vh;
  top: 8vh;
  left: 4vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  @media(max-width: 479px) {
    top: 6vh;
    zIndex: 999;
  }
`;

const ProgressBarContainer = styled.div`
  width: 1px;
  flex: 12;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  @media(max-width: 479px) {
    display: none;
  }
`

const ProgressBarTrack = styled.div`
  background-color: black;
  width: inherit;
  height: 100%;
  position: absolute;
  opacity: 0.2;
  ${'' /* @media (prefers-color-scheme: dark) {
    background-color: white;
  } */}
`;

const ProgressBar = styled.div`
  background-color: black;
  height: ${props => props.percentage * 100}%;
  ${'' /* @media (prefers-color-scheme: dark) {
    background-color: white;
  } */}
`

const ContactButton = styled.div`
  flex: 1;
  transform: rotate(-90deg);
  align-items: center;
  white-space: nowrap;
  font-weight: 500;  
`;

const ContentContainer = styled.div`
  padding-left: 12vw;
  padding-right: 10vw;
  padding-bottom: 30px;
  overflow-x: hidden;
  @media(max-width: 479px) {
    padding-left: 6vw;
  }
`;

const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 4%;
  right: 4%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 16px;
  border: 0;
  background-color: #F0F0F0
`

export default MainLayout;