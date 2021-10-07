import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { mediaQueries, theme } from "./theme";

import arrowDown from "./assets/icon-arrow-down.svg";
import imageHeaderMobile from "./assets/mobile/image-header.jpg";
import imageHeaderDesktop from "./assets/desktop/image-header.jpg";
import hamburger from "./assets/icon-hamburger.svg";
import logo from "./assets/logo.svg";

const StyledHeader = styled.header`
  position: absolute;
  top: 3.2rem;
  padding: 0 2.4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${mediaQueries.md} {
    position: static;
    padding-top: 2.4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    justify-content: flex-end;
    align-items: center;
  }
  img {
    ${mediaQueries.md} {
      position: absolute;
      left: 4rem;
      top: 3rem;
    }
  }
  button {
    background: none;
    border: none;
    display: inline-block;
    cursor: pointer;
    opacity: ${({ active }) => (active ? "0.4" : "1")};
    ${mediaQueries.md} {
      display: none;
    }
  }
  .desktop-menu {
    display: none;
    ${mediaQueries.md} {
      display: block;
      ul {
        display: flex;
        list-style: none;
        gap: 4.7rem;
        font-size: 1.8rem;
        font-weight: 600;
        color: ${theme.colors.white};
        align-items: center;
        li {
          &:last-child {
            background: rgb(255, 255, 255, 1);
            font-size: 1.4rem;
            font-family: "Fraunces", serif;
            font-weight: 900;
            padding: 1rem 1.5rem;
            border-radius: 3rem;
            color: black;
            text-transform: uppercase;
            cursor: pointer;
            transition: all ease-in-out 100ms;
            &:hover {
              background: rgb(255, 255, 255, 0.4);
            }
          }
        }
      }
    }
  }

  .mobile-menu {
    ${mediaQueries.md} {
      display: none;
    }
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      width: 0;
      height: 0;
      border: 0 solid transparent;
      border-top-width: 8.5rem;
      border-bottom-width: 0px;
      border-right: 8.5rem solid ${theme.colors.white};
      top: -4rem;
      right: 0;
    }
    position: absolute;
    top: 9rem;
    left: 0;
    right: 0;
    display: ${(props) => (props.active ? "block" : "none")};
    height: 33rem;
    width: 85%;
    margin: auto;
    background-color: ${theme.colors.white};
    z-index: 99;
    ul {
      list-style: none;
      height: 100%;
      display: grid;
      grid-auto-flow: row;
      gap: 3.2rem;
      place-content: center;
      li {
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
        color: ${theme.colors.darkGrayishBlue};
        cursor: pointer;
        &:last-child {
          background: ${theme.colors.yellow};
          font-size: 1.5rem;
          font-family: "Fraunces", serif;
          font-weight: 900;
          padding: 1.6rem 3.2rem;
          border-radius: 3rem;
          color: black;
        }
      }
    }
  }
`;

const StyledHeroContent = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  place-content: center;
  gap: 3rem;
  ${mediaQueries.md} {
    display: block;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: ${theme.colors.white};
    ${mediaQueries.md} {
      margin-top: 10.5rem;
      margin-bottom: 5rem;
    }
  }
  img {
    display: block;
    ${mediaQueries.md} {
      margin: 0 auto;
    }
  }
`;

const StyledHero = styled.div`
  height: 60rem;
  background-image: url(${imageHeaderMobile});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  ${mediaQueries.md} {
    background-image: url(${imageHeaderDesktop});
    height: 100vh;
  }
  ${mediaQueries.lg} {
    max-height: 88rem;
    width: auto;
  }
`;

const Header = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => setActive(!active);
  const arrowRef = useRef(null);

  useEffect(() => {
    arrowRef.current.animate(
      [
        // keyframes
        { transform: "translateY(0px)" },
        { transform: "translateY(-11px)" },
        { transform: "translatey(0px)" },
      ],
      {
        // timing options
        duration: 900,
        iterations: Infinity,
      }
    );
  }, []);

  return (
    <>
      <StyledHero>
        <StyledHeader active={active}>
          <img src={logo} alt="sunnyside logo" />
          <button onClick={handleActive}>
            <img src={hamburger} alt="" />
          </button>

          <nav className="desktop-menu">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>

          <nav className="mobile-menu">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </StyledHeader>
        <StyledHeroContent>
          <h1>We are creatives</h1>
          <img
            src={arrowDown}
            alt="icon of arrow pointing down"
            ref={arrowRef}
          />
        </StyledHeroContent>
      </StyledHero>
    </>
  );
};

export default Header;
