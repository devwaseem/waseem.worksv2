import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LogoWhite from '../images/logo-white.svg'
import LogoBlack from '../images/logo-black.svg'
import LinkTextWithArrow from '../components/LinkTextWithArrow';
import Cursor from '../components/Cursor'
import LocomotiveScroll from 'locomotive-scroll';

const MainLayout = ({children, RevealView}) => {
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  const containerRef = useRef(null);
  const [isRevealComplete, setRevealComplete] = useState(false);
  


  useEffect(() => {
    var scroll = new LocomotiveScroll({
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
      setPercentageScrolled(percentage);
    })

  return () => {
    scroll.destroy()
  }

  }, []);

  return (
    <>
      {
        RevealView && !isRevealComplete &&
        <RevealView onRevealComplete={() => setRevealComplete(true)}/>
      }
      <SEO title="Waseem" ></SEO>
      <Cursor/>
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
          <NavLink 
            to='/' 
            data-cursor-type="hover" >
            about
          </NavLink>
          <NavLink 
            to='/' 
            data-cursor-type="hover" 
          >
            contact
          </NavLink>
        </TopNavBar>
          {children}
        </ContentContainer>
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


const LeftBar = styled.div`
  width: 64px;
  height: 86vh;
  top: 8vh;
  left: 4vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  
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
  padding-bottom: 200px;
  overflow-x: hidden;
  @media(max-width: 479px) {
    padding-left: 6vw;
  }
`;

export default MainLayout;