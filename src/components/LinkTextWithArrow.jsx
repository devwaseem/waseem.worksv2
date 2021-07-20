import React, { useState } from 'react';
import styled from 'styled-components';
import TopRightArrow from '../images/arrow-top-right.svg'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const LinkTextWithArrow = ({arrowSize=8, to, href, text=''}) => {

  const [isHovering, setIsHovering] = useState(false);

  function Content() {
    return (
      <Container onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <LinkText>{text}</LinkText>
        <Arrow size={arrowSize} isHovering={isHovering}/>
      </Container>
    )
  }
  if (to) {
    return (
      <StyledLink to={to}>
        <Content/>
      </StyledLink>
    )
  } else {
    return (
      <StyledALink href={href}>
        <Content />
      </StyledALink>
    )
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledALink = styled.a`
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LinkText = styled.p`
  color: black;
`

const Arrow = styled.div`
  background-image: url(${TopRightArrow});
  background-repeat: no-repeat;
  background-size: contain;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-left: 8px;
  transform: rotate(${props => props.isHovering ? 45: 0}deg);
  transition: all 1s ease-out;
`



LinkTextWithArrow.propTypes = {
  arrowSize: PropTypes.number.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default React.memo(LinkTextWithArrow);