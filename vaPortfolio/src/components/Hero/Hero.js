import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Vidur Agaram
      </SectionTitle>
      <SectionText>
        I am a second year computer science major and data science minor at the University of Virginia who works on software for companies to expand their businesses. Reach out to me for any job positions. Actively Looking. 
      </SectionText>
      <Button onClick={()=> window.location = 'https://google.com'}>Hire Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;