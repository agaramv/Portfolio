import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          {/* <Img src={image} /> */}
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            {/* <Button variant="contained">Hello World</Button> */}
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
            {/* <div>
              {tags.map((tag, i)=>(
                <ListItem key={i}>
                  <Chip
                    label={tag}
                  />
                </ListItem>
                
              ))}
            </div> */}
              
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            {/* <ExternalLinks href={source}>Source</ExternalLinks> */}

          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;