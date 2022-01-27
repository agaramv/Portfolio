import React from 'react';
import { SiAngularjs, SiSpring, SiGithub } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="#tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the web development world from frontend to backend. </SectionText>
    <List>
      <ListItem>
        <SiAngularjs size="3rem"/>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>Experience with <br />
            Angular and React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiSpring size="3rem"/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>Experience with <br />
            Spring Framework and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiGithub size="3rem"/>
        <ListContainer>
          <ListTitle>Tech Tools</ListTitle>
          <ListParagraph>Experience with <br />
            Github and Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
