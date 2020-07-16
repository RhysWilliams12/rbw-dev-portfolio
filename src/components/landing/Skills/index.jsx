import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Rhys and I’m a full stack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>I'm a Software Engineer who has graduated from KCL in 2017 with a degree in Computer Science.</p>
          <p>
            Since then I've been working in the Aerospace &amp; Defence industry specialising in software development
            based on the Microsoft stack.
          </p>
          <p>
            Working in an AGILE/SCRUM team, I've been exposed to front-end and back-end development involved in creating
            a web app for our customer.
          </p>
          <p>If you're interested to know more about me and my profession please do drop me a message.</p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
