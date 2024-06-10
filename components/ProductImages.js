import styled from "styled-components";
import {useState} from "react";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const BigImage = styled.img`
  max-width: 100%;
`;
const ImageButtons = styled.div`
  position: relative;
  flex-basis: 82px;
  flex-grow: 1;
  flex-shrink: 0;
  overflow-y: scroll;
  scrollbar-width: none;
  & > div{
    position: absolute;
    inset:0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 0;
  }
`;
const ImageButton = styled.div`
  border: 1px solid #ccc;
  ${props => props.active ? `
    border-color: #ccc;
  ` : `
    border-color: transparent;
  `}
  width:80px;
  height: 100px;
  cursor: pointer;
`;
const BigImageWrapper = styled.div`
  text-align: center;
  flex-shrink: 1;
  flex-grow: 1;
`;
const MainWrapper = styled.div`
  display:flex;
  gap: 20px;
`;

export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);
  return (
    <MainWrapper>
      <ImageButtons>
        <div>
          {images.map(image => (
            <ImageButton
              key={image}
              active={image===activeImage}
              onClick={() => setActiveImage(image)}>
              <Image src={image} alt=""/>
            </ImageButton>
          ))}
        </div>
      </ImageButtons>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
    </MainWrapper>
  );
}