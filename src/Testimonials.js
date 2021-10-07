import styled from "styled-components";
import { clientDetails } from "./data/data";
import { theme, mediaQueries } from "./theme";

const StyledSection = styled.section`
  padding: 0 2.4rem;
  margin-bottom: 8.6rem;
  ${mediaQueries.md} {
    margin-bottom: 16rem;
    padding: 0 5.4rem;
    margin-top: 16rem;
  }
  h3 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.6rem;
    color: ${theme.colors.grayishBlue};
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }
  div {
    ${mediaQueries.md} {
      display: flex;
      gap: 8rem;
      width: 90%;
      margin: 0 auto;
    }

    article {
      display: grid;

      img {
        border-radius: 50%;
        height: 7.2rem;
        margin: 0 auto;
        margin-top: 6.4rem;
      }
      p {
        text-align: center;
        color: ${theme.colors.veryDarkGrayishBlue};
        margin-top: 3.2rem;
        line-height: 1.6;
      }
      h4 {
        margin-top: 3.2rem;
        font-size: 1.8rem;
        text-align: center;
      }
      small {
        font-size: 1.4rem;
        font-family: "Barlow", sans-serif;
        text-transform: capitalize;
        text-align: center;
        color: ${theme.colors.grayishBlue};
        margin-top: 1rem;
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <StyledSection>
      <h3>Client Testimonials</h3>
      <div>
        {clientDetails.map((client) => {
          return (
            <article>
              <img src={client.image} alt="" />
              <p>{client.body}</p>
              <h4>{client.name}</h4>
              <small>{client.jobTitle}</small>
            </article>
          );
        })}
      </div>
    </StyledSection>
  );
};

export default Testimonials;
