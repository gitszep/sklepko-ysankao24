import Link from "next/link";
import styled from "styled-components";
import SquareImageLink from "@/components/SquareImageLink";
import ContactRow from "@/components/sections/ContactRow";
import BarsIcon from "@/components/icons/Bars";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {useState} from "react";

const StyledNav = styled.nav`
  // open button
  & > button{
    display: inline-block;
    background: none;
    padding: 0 20px;
    margin-left: -20px;
    border: 0;
    cursor: pointer;
    color: inherit;
    height: 100%;
    svg{
      height: 32px;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const ProductsSection = styled.div`
  box-sizing: border-box;
  ul, ul li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li a{
    display: inline-block;
    padding: 5px 0;
  }
  @media (min-width: 1024px) {
    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
`;
const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  a.subtitle{
    margin-top: 5px;
    font-size: 1.3rem;
    @media (min-width: 1024px) {
      margin-top: 0;
      margin-bottom: 8px; 
    }
  }
  a.subtitle, ul li a{
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 1024px) {
    padding: 40px;
  }
`;
const ContactRowOuter = styled.div`
  padding: 20px 40px;
  color: inherit;
  border-top: 1px solid rgba(0, 0, 0, .2);
  display: none;
  svg{
    height: 16px;
  }
  @media (min-width: 1024px) {
    display: block;
  }
`;
const NavLinksOuter = styled.div`

  display: ${props => props.mobileNavOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  overflow-y: auto;
  background-color: #F6F4ED;
  color: #000;
  padding: 20px;
  
  button{
    display: ${props => props.mobileNavOpen ? 'inline-flex' : 'none'};
    padding: 20px;
    margin: 0 -20px -20px;
    background: none;
    border: 0;
    gap: 10px;
    text-transform: uppercase;
    align-items: center;
    cursor: pointer;
    svg{
      height: 32px;
    }
  }
  
  & > a{
    display: block;
    font-size: 2rem;
    margin: 10px 0 0;
  }
  .square-ad-outer{
    display: none;
  }


  @media (min-width: 1024px) {
    background-color: transparent;
    position: initial;
    display: flex;
    gap: 15px;
    align-items: center;
    height: 100%;
    color: inherit;
    padding: 0;

    .square-ad-outer{
      display: block;
    }
    
    & > a {
      height: 100px;
      line-height: 100px;
      font-size: 1rem;
      position: relative;
      margin: 0;
    }

    a + div {
      position: absolute;
      z-index: 10;
      top: 100px;
      left: 0;
      right: 0;
      width: 100%;
      display: none;
    }

    a:hover + div, a + div:hover {
      display: block;
    }
  }
  
`;

export const HeaderNav = ({categories}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <StyledNav>
      <button onClick={() => setMobileNavOpen(true)}>
        <BarsIcon />
      </button>
      <NavLinksOuter mobileNavOpen={mobileNavOpen}>
        <button onClick={() => setMobileNavOpen(false)}>
          <CloseIcon />
          zamknij
        </button>
        <Link href={'/'}>Home</Link>
        <Link href={'/products'}>Products</Link>
        <ProductsSection>
          <Cols>
            <div>
              <Link className="subtitle" href={'/products'}>Clothing</Link>
              <ul>
                {categories && categories.map(c => (
                  <li key={c._id}>
                    <Link href={'/category/' + c._id}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link className="subtitle" href={'/products'}>Featured</Link>
              <ul>
                <li><Link href={'/'}>Link 1</Link></li>
                <li><Link href={'/'}>Link 2</Link></li>
                <li><Link href={'/'}>Link 3</Link></li>
              </ul>
            </div>
            <div>
              <Link className="subtitle" href={'/products'}>Culture club</Link>
              <ul>
                <li><Link href={'/'}>Link 1</Link></li>
                <li><Link href={'/'}>Link 2</Link></li>
                <li><Link href={'/'}>Link 3</Link></li>
              </ul>
            </div>
            <div className="square-ad-outer">
              <SquareImageLink
                img="//alchemy-theme-modern.myshopify.com/cdn/shop/files/nav-image-2.jpg?v=1710261609&width=1200"
                title="The holidazed Capsule"
                linkLabel="Show now"
                linkUrl="/products"
              />
            </div>
          </Cols>
          <ContactRowOuter>
            <ContactRow/>
          </ContactRowOuter>
        </ProductsSection>
        <Link href={'/contact'}>Contact</Link>
      </NavLinksOuter>
    </StyledNav>
  );
}