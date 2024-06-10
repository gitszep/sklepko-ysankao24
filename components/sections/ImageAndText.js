import styled from "styled-components";
import {AlchemyButtonStyle} from "@/components/Button";

const Wrapper = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  img{
    max-width:100%;
    display: block;
  }
  .content{
    background: ${props => props.contentBg || '#fff'};
    padding: 20px 30px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.contentBg ? '#000' : '#5c5c5c'};
    @media (min-width: 768px) {
      padding: 40px 80px;
      gap: 25px;
    }
    h3{
      margin:0;
      font-size: 1.4rem;
      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
    p{
      color: #5c5c5c;
    }
    a{
      ${AlchemyButtonStyle};
      width: auto;
      ${props => props.contentBg && `
        border-color:#000;
        color:#000;
      `};
    }
  }
`;

export default function ImageAndText({img, title, description, buttonLink, buttonLabel, contentBg, contentPosition='right'}) {
  function ImgCol() {
    return (
      <div>
        <img src={img} alt=""/>
      </div>
    );
  }
  function ContentCol() {
    return (
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a href={buttonLink}>{buttonLabel}</a>
        </div>
      </div>
    );
  }

  return (
    <Wrapper contentBg={contentBg}>
      {contentPosition === 'right' && (
        <>
          <ImgCol />
          <ContentCol />
        </>
      )}
      {contentPosition === 'left' && (
        <>
          <ContentCol />
          <ImgCol />
        </>
      )}
    </Wrapper>
  );
}