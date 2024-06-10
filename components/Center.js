import styled from "styled-components";

const Outer = styled.div`
  ${props => props.bgColor && `
    background-color: ${props.bgColor};
    padding: 40px 20px;
    @media (min-width: 768px) {
      padding: 80px 40px;
    }
  `};
`;

const Inner = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  @media (min-width: 768px) {
    width: calc(100% - 80px);
    padding: 0 20px;
    margin: 0 auto;
  }
`;

export default function Center({children,bgColor=null}) {
  return (
    <Outer bgColor={bgColor}>
      <Inner className="center-inner">{children}</Inner>
    </Outer>
  );
}