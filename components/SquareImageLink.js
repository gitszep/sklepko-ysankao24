import styled from "styled-components";
import Link from "next/link";

const Square = styled(Link)`
  width: 100%;
  display: block;
  aspect-ratio: 1 / 1;
  background-color: #000;
  overflow: hidden;
  position: relative;
  img {
    opacity: .7;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .3s linear all;
  }
  &:hover img{
    transform: scale(1.05);
  }
  & > div{
    text-align: center;
    position: absolute;
    inset:0;
    z-index:1;
    color:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      font-size:1.2rem;
      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    }
    span{
      text-transform: uppercase;
      border-bottom: 2px solid #fff;
    }
  }
`;

export default function SquareImageLink({img,title,linkLabel,linkUrl}) {
  return (
    <Square href={linkUrl}>
      <img src={img} alt="bg"/>
      <div>
        <h2>{title}</h2>
        <span>{linkLabel}</span>
      </div>
    </Square>
  );
}