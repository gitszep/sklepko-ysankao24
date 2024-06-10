import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-sizing:border-box;
  font-family:inherit;
`;

export default function Input(props) {
  return <StyledInput {...props} />
}