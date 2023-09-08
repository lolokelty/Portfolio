import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello! Welcome to my website, my name is Logan Kelty. Im currenlty seeking a roll in software development.
        </SectionText>
        <Button onClick={() => window.location = "https://mail.google.com/mail/u/0/#onboarding/chat"}>Contact Me!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;