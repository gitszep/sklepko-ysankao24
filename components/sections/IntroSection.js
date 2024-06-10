import styled from "styled-components";

const Section = styled.section`
  padding: 167px 20px 90px;
  min-height: 240px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #F6F4ED;
  text-align: center;
  h1{
    font-size: 2.75rem;
  }
  & ~ div > .center-inner{
    margin-top: -80px;
    background-color: #fff;
  }
`;

export default function IntroSection({header,text='',image=null,bgColor='#F6F4ED'}) {
  return (
    <Section style={{backgroundImage: image ? `url("${image}")` : 'none'}}>
      <h1>{header}</h1>
      {text && <p>{text}</p>}
    </Section>
  );
}