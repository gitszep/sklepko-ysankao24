import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import {
  AlchemyButtonStyle,
  AlchemyUnderlineButtonStyle,
  AlchemyWhiteButtonStyle,
  ButtonStyle
} from "@/components/Button";

const StyledSection = styled.div`
  background-color: black;
  @media (min-width: 768px) {
    display: flex;
    height: 100vh;
  }
  .column{
    flex-grow: 1;
    position: relative;
    height: 100vh;
    max-height: 140vw;
  }
  .content{
    position: absolute;
    inset:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #fff;
    z-index:1;
    h2{
      font-size: 3rem;
      margin-bottom:5px;
    }
    p{
      margin-bottom: 25px;
    }
    a{
      ${props => props.buttonTheme === 'underline' ? AlchemyUnderlineButtonStyle : AlchemyWhiteButtonStyle};
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:0;
    opacity: .7;
  }
`;

export default function FullWidthColumns({columns, buttonTheme = 'default'}) {
  return (
    <StyledSection buttonTheme={buttonTheme}>
      {columns?.length > 0 && columns.map(col => (
        <div className="column" key={col.title}>
          <div className="content">
            <h2>{col.title}</h2>
            <p>{col.text}</p>
            <ButtonLink href={col.buttonLink}>{col.buttonText}</ButtonLink>
          </div>
          <img src={col.image} alt="cover image"/>
        </div>
      ))}
    </StyledSection>
  );
}