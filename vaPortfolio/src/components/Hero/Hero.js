import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Vidur Agaram
      </SectionTitle>
      <SectionText>
        I am a second year student at the University of Virginia majoring in computer science and minoring in data science. I am a full-stack developer who creates software solutions to simplify and improve my customer's everyday life.
      </SectionText>
      <Button onClick={handleScroll}>
        Contact Me
        </Button>
    </LeftSection>
  </Section>
);

export default Hero;