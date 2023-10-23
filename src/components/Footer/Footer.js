import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:nielsenririe@gmail.com'>nielsenririe@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Good Morning!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/morpline'>
            <AiFillGithub size={"3rem"}/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/'>
            <AiFillLinkedin size={"3rem"}/>
          </SocialIcons>
          <SocialIcons href='https://instagram.com/'>
            <AiFillInstagram size={"3rem"}/>
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
