import styled from "styled-components";
import { gallery } from "./data/data";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Gallery = () => {
  return (
    <StyledSection>
      {gallery.map((image) => {
        return (
          <>
            <img src={image} alt="" />
          </>
        );
      })}
    </StyledSection>
  );
};

export default Gallery;
