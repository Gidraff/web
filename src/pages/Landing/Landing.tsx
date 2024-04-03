import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Wrapper } from "../Common.style/Wrapper.styled";

const Title = styled.h1`
    font-size: 1.2 em;
    color: BF4F74;
`
const Text = styled.p`
  font-size: 1.2em;
  color: BF4F74;
`

const IconContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
`

const IconLink = styled.a`
  margin: 0 .5em;
  width: 24px;
  height: 24px;
`



const LandingPage = (() => {
  return (
    <Wrapper>
      <Title>Software Engineer,  DevOps evangelist, and amateur photographer</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </Text>
      <IconContainer>
        <IconLink href="http://github.com/Gidraff/"><FontAwesomeIcon icon={faGithub} /></IconLink>
        <IconLink href="https://twitter.com/kamandegid"><FontAwesomeIcon icon={faTwitter} /></IconLink>
        <IconLink href="https://www.linkedin.com/in/gidraff-kamande-49373a130/"><FontAwesomeIcon icon={faLinkedin} /></IconLink>
      </IconContainer>
    </Wrapper>
  )
})

export default LandingPage;