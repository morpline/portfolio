import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my <br/>
        PERSONAL PORTFOLIO
      </SectionTitle>
      <SectionText>
        Dingus bingus smasnug soup mom
      </SectionText>
        <Button onClick={()=>{console.log("Yu hav lernd")}}>Lern Mor</Button>
    </LeftSection>
  </Section>
);

export default Hero;