import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  svg{
    color: inherit;
    height: 18px;
  }
  .icons{
    display: flex;
    gap: 10px;
  }
  .icon-with-text{
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default function ContactRow() {
  return (
    <Grid>
      <div className="icons">
        <a href="">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <span>NIP: 5732948681</span>
      </div>
      <div className="icon-with-text">
        <FontAwesomeIcon icon={faPhone} />
        <span>Zadzwoń: <a href="tel:884803964">884 803 964</a></span>
      </div>
      <div className="icon-with-text">
        <FontAwesomeIcon icon={faEnvelope} />
        <span><a href="mailto:matyldasklep@int.pl">matyldasklep@int.pl</a></span>
      </div>
    </Grid>
  );
}