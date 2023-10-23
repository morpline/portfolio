import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title:"Project 1",
  description:"This is a description for a project."
},{
  title:"Project 2",
  description:"This is a description for a project."
},{
  title:"Project 3",
  description:"This is a description for a project."
},{
  title:"Project 4",
  description:"This is a description for a project."
}];
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((pproject) => (
        <BlogCard key={pproject.id}>
          <Img src={pproject.image}/>
          <TitleContent>
            <HeaderThree title>
              {pproject.title}
            </HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>
            {pproject.description}
          </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {pproject.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={pproject.visit}>Code</ExternalLinks>
            <ExternalLinks href={pproject.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;