import styled from "styled-components";
import {AlchemyWhiteButtonStyle} from "@/components/Button";

const SectionWrapper = styled.div`
  background-position: center;
  background-size: cover;
  padding: 80px 20px;
`;

const Box = styled.div`
  background-color: rgba(248, 172, 181, 0.6);
  max-width: 715px;
  margin: 0 auto;
  padding: 40px;
  color:#fff;
  text-align: center;
  h3{
    font-size:2rem;
  }
  a{
    margin-top: 10px;
    ${AlchemyWhiteButtonStyle};
  }
`;

export default function BgImgAndText({img, title, description, buttonLabel, buttonLink}) {
  return (
    <SectionWrapper style={{backgroundImage: `url(${img})`}}>
      <Box>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={buttonLink}>{buttonLabel}</a>
      </Box>
    </SectionWrapper>
  );
}