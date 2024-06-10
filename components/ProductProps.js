import styled from "styled-components";

const PropsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  div {
    h2{
      font-weight: normal;
      color: #5c5c5c;
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    ul {
      display: flex;
      gap: 10px;
      margin:0;
      padding:0;
    }
  }
`;

const PropBox = styled.li`
  display: block;
  border: 2px solid ${props => props.selected ? '#000' : '#ddd'};
  padding: ${props => props.color ? '3px' : '10px 20px'};
  cursor: pointer;
  ${props => props.color ? `
    border-radius: 99999px;
  ` : ''}
`;

const ColorBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 99999px;
  background-color: ${props => props.color};
`;

export default function ProductProps({properties, selectedProps, onChange}) {
  if (!properties) {
    return;
  }
  return (
    <PropsWrapper>
      {Object.keys(properties).map((propName) => (
        <div key={propName}>
          <h2>{propName}</h2>
          <ul>
            {properties[propName].split(',').map(propValue => {
              const color = /(#[0-9a-fA-F]{3,6})/.exec(propValue)?.[0] || null;
              return (
                <PropBox
                  selected={selectedProps[propName] === propValue}
                  color={color}
                  key={propValue}
                  onClick={() => onChange(propName, propValue)}
                >
                  {color ? <ColorBox color={color} /> : propValue}
                </PropBox>
              );
            })}
          </ul>
        </div>
      ))}
    </PropsWrapper>
  );
}