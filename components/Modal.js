import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const Backdrop = styled.div`
  position:fixed;
  inset:0;
  z-index:20;
  padding: 50px;
  background-color: rgba(0, 0, 0, .9);
`;
const ModalBox = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 480px;
  margin: auto;
  position: relative;
  button.close{
    background-color:transparent;
    border:0;
    font-size: 2rem;
    color:#555;
    cursor: pointer;
  }
`;
const Header = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Modal({show=false,title='',onHide=()=>{},children}) {
  if (!show) return;
  return (
    <Backdrop onClick={onHide}>
      <ModalBox onClick={ev => ev.stopPropagation()}>
        <Header>
          <h2>{title}</h2>
          <button className="close" onClick={onHide}>
            <FontAwesomeIcon icon={faClose}/>
          </button>
        </Header>
        {children}
      </ModalBox>
    </Backdrop>
  );
}