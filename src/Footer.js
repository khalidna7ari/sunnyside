import styled from "styled-components";
import { theme, mediaQueries } from "./theme";

import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Facebook } from "./assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "./assets/icon-instagram.svg";
import { ReactComponent as Pinterest } from "./assets/icon-pinterest.svg";
import { ReactComponent as Twitter } from "./assets/icon-twitter.svg";

const StyledFooter = styled.footer`
  background-color: ${theme.colors.darkModerateCyan};
  display: grid;
  padding: 6.4rem 3.9rem 8rem;
  svg {
    margin: 0 auto;
    cursor: pointer;
    path {
      fill: ${theme.colors.veryDarkDesaturatedBlue};
      &:hover {
        fill: ${theme.colors.white};
      }
    }
  }
  .links {
    display: flex;
    list-style: none;
    justify-content: space-between;
    font-size: 1.8rem;
    color: ${theme.colors.veryDarkDesaturatedBlue};
    margin-top: 4rem;
    ${mediaQueries.md} {
      justify-content: center;
      gap: 3rem;
    }
    li {
      cursor: pointer;
      &:hover {
        color: ${theme.colors.white};
      }
    }
  }
  .socials {
    list-style: none;
    display: flex;
    margin-top: 8.8rem;
    justify-content: center;
    gap: 2.8rem;
    ${mediaQueries.md} {
      margin-top: 8.8rem;
    }
    ul {
      li {
        cursor: pointer;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <ul className="links">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className="socials">
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Pinterest />
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
