import styled from "styled-components";

import { data, dataTwo } from "./data/data";
import { mediaQueries, theme } from "./theme";

import cherryBackground from "./assets/mobile/image-graphic-design.jpg";
import desktopCherry from "./assets/desktop/image-graphic-design.jpg";
import orangeBackground from "./assets/mobile/image-photography.jpg";
import desktopOrange from "./assets/desktop/image-photography.jpg";

const StyledSection = styled.section`
  .services__first-section {
    ${mediaQueries.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    img {
      max-width: 100%;
      height: 100%;
    }
    article {
      padding-block-start: 6.4rem;
      padding-block-end: 6.4rem;
      padding-inline-start: 2.4rem;
      padding-inline-end: 2.4rem;
      display: grid;
      grid-auto-flow: row;
      ${mediaQueries.md} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 47rem;
        margin: 0 auto;
      }
      h2 {
        text-align: center;
        margin-bottom: 2.4rem;
        ${mediaQueries.md} {
          text-align: left;
        }
      }
      p {
        text-align: center;
        margin-bottom: 3.2rem;
        ${mediaQueries.md} {
          text-align: left;
        }
      }
    }
  }

  .services__first-section:nth-child(even) {
    img {
      order: 2;
    }
    article {
      .link-btn::before {
        background: ${theme.colors.softRed};
      }
    }
  }

  .services__second-section {
    ${mediaQueries.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    img {
      display: block;
    }
    article {
      padding-inline-start: 2.4rem;
      padding-inline-end: 2.4rem;
      text-align: center;
      div {
        max-width: 40rem;
        margin: 0 auto;
        h3 {
          color: ${theme.colors.darkDesaturatedCyan};
        }
        p {
          margin-top: 2.7rem;
          font-size: 1.6rem;
          color: ${theme.colors.darkDesaturatedCyan};
        }
      }
    }
    .article1 {
      background-image: url(${cherryBackground});
      ${mediaQueries.md} {
        background-image: url(${desktopCherry});
      }
    }
    .article2 {
      background-image: url(${orangeBackground});
      ${mediaQueries.md} {
        background-image: url(${desktopOrange});
      }
    }
    .article1,
    .article2 {
      padding-top: 45rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      padding-bottom: 6rem;
      ${mediaQueries.md} {
        background-size: cover;
        padding-bottom: 12rem;
      }
    }
  }

  .services__second-section:nth-child(even) {
    article {
      div {
        h3 {
          color: ${theme.colors.veryDarkDesaturatedBlue};
        }
        p {
          color: ${theme.colors.darkBlue};
        }
      }
    }
  }
`;

const Grid = () => {
  return (
    <StyledSection>
      {data.map((item) => {
        return (
          <div className="services__first-section">
            <img src={item.image} alt={item.image} width="100%" />
            <article>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <button className="link-btn">{item.link}</button>
            </article>
          </div>
        );
      })}
      <div className="services__second-section">
        {dataTwo.map((item, index) => {
          return (
            <article className={`article${index + 1}`}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </StyledSection>
  );
};

export default Grid;
