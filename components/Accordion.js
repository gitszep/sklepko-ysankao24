import {useState} from "react";
import styled from "styled-components";

const AccordionItem = styled.div`
  position: relative;
  border-bottom: 1px solid #eee;
  .header{
    cursor:pointer;
    text-transform: uppercase;
    h3{
      color: #5c5c5c;
      font-weight: bold;
      font-size: .9rem;
      margin: 20px 0;
    }
    button{
      border:0;
      background:none;
      position:absolute;
      top:0;
      right:0;
    }
  }
  .content{
    color: #5c5c5c;
    max-height:0;
    font-size: .8rem;
    padding-bottom: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
    ${props => props.active && `
      max-height:500px;
      padding-bottom: 20px;
    `}
  }
`;

export default function Accordion({defaultActiveIndex = 0, items}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0);
  return (
    <>
      {items.map((item,index) => (
        <AccordionItem key={item.title} active={index === activeIndex}>
          <div className="header" onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}>
            <h3>{item.title}</h3>
            <button>{index === activeIndex ? '-' : '+'}</button>
          </div>
          <div className="content">{item.text}</div>
        </AccordionItem>
      ))}
    </>
  );
}