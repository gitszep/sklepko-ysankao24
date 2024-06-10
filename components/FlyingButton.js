import styled from "styled-components";
import {AlchemyButtonStyle, AlchemyWhiteButtonStyle} from "@/components/Button";
import {CartContext} from "@/components/CartContext";
import {useContext, useEffect, useRef} from "react";

const FlyingButtonWrapper = styled.div`
  img{
    max-width: 100px;
    max-height: 100px;
    position: fixed;
    display: none;
  }
  button{
    cursor:pointer;
    ${props => props.main && AlchemyButtonStyle}
    ${props => props.main && `
     border-color:#000;
     background-color: #fff;
     width: 100%;
     padding: 15px 0;
     font-size: .9rem;
    `}
    ${props => props.white && AlchemyWhiteButtonStyle}
  }
  @keyframes fly{
    100%{
      top:0;
      left:85%;
      opacity: 0;
      display:none;
      max-width: 50px;
      max-height: 50px;
    }
  }
`;

export default function FlyingButton({_id, white, main, src, selectedProps, ...props}) {
  const {addProduct} = useContext(CartContext);
  const imgRef = useRef();
  function sendImageToCart(ev) {
    imgRef.current.style.display = 'inline-block';
    imgRef.current.style.left = (ev.clientX-50) + 'px';
    imgRef.current.style.top = (ev.clientY-50) + 'px';
    imgRef.current.style.animation = 'fly .5s linear';
    setTimeout(() => {
      imgRef.current.style.display = 'none';
      imgRef.current.style.animation = 'none';
    }, 400);
    console.log(imgRef);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const reveal = imgRef.current?.closest('div[data-sr-id]');
      if (reveal?.style.opacity === '1') {
        // visible
        reveal.style.transform = 'none';
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <FlyingButtonWrapper
        white={white}
        main={main}
        onClick={() => addProduct(_id, selectedProps)}>
        <img src={src} ref={imgRef} alt=""/>
        <button onClick={ev => sendImageToCart(ev)} {...props} />
      </FlyingButtonWrapper>
    </>
  );
}
