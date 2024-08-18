import styled, {css} from "styled-components";
import {HeaderNav} from "@/components/HeaderNav";
import Link from "next/link";
import CartIcon from "@/components/icons/CartIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import {useEffect, useState} from "react";

const whiteHeaderStyles = css`
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
`;

const StyledHeader = styled.header`
  display: grid;
  padding: 0 20px;
  transition: all .3s ease-in-out;
  z-index: 100;
  border-bottom: 1px solid transparent;
  
  grid-template-columns: 1fr 1.4fr 1fr;
  @media (min-width: 1024px) {
    padding: 0 40px;
    grid-template-columns: .4fr .2fr .4fr; 
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
  
  ${props => props.transparentByDefault && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color:#fff;
    &:hover{
      ${whiteHeaderStyles};
    }
  `}
  ${props => !props.transparentByDefault && css`
    position: sticky;
    top: 0;
    & {
      ${whiteHeaderStyles};
    }
  `}
  ${props => props.isScrolled && css`
    & {
      ${whiteHeaderStyles};
    }
  `}
  
`;
const LogoOuter = styled.div`
  text-align: center;
`;
const Logo = styled(Link)`
  text-decoration: none;
  position: relative;
  z-index: 3;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  line-height: 100px;
`;
const ButtonsOuter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  svg{
    color: inherit;
    height: 32px;
  }
  a{
    position: relative;
  }
  span.dot{
    position: absolute;
    top:0;
    right:-5px;
    border-radius: 99999px;
    width: 10px;
    height: 10px;
    font-size: 2rem;
    line-height: .5rem;
  }
  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export default function Header2({transparentByDefault = true, categories, cartProducts}) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledHeader transparentByDefault={transparentByDefault} isScrolled={isScrolled}>
      <HeaderNav categories={categories} />
      <LogoOuter>
        <Logo href="/" className="logo">Kołysanka</Logo>
      </LogoOuter>
      <ButtonsOuter>
        <Link href={"/cart"}>
          <CartIcon />
          {cartProducts?.length > 0 && (
            <span className="dot">&#x2022;</span>
          )}
        </Link>
        <Link href={"/search"}>
          <SearchIcon />
        </Link>
      </ButtonsOuter>
    </StyledHeader>
  );
}