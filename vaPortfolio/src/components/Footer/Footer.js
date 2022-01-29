import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, ListTitle, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Contact</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          {/* <LinkItem href="tel:804-937-6566"></LinkItem> */}
          <p>804-937-6566</p>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          {/* <LinkItem href="mailto:vagaram09@gmail.com"></LinkItem> */}
          <p>vagaram09@gmail.com</p>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turning Paper into Paper Airplanes</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/agaramv">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vidur-agaram-905aab212/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>

      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
