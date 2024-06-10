// components/ImageProps.js

import styled from "styled-components";

const ImageProps = styled.img`
  min-width: 100%;
  min-height: 100%;
  height: auto; 
  object-fit: cover; 
  @media only screen and (max-width: 600px) {
    min-height: 500px;
  }
`;

export default ImageProps;
