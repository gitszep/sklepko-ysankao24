import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";
import CartIcon from "@/components/icons/CartIcon";
import {HeaderNav} from "@/components/HeaderNav";
import Header2 from "@/components/Header2";

const StyledLink = styled(Link)`
  color: ${(props) =>
    props.color}; 
`;
const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  color: ${(props) => props.color}; 
  position: relative;
  svg {
    height: 20px;
  }
  sup{
    position: relative;
    top: -10px;
    left: -8px;
    background-color: #e6e4dD;
    border-radius: 999px;
    padding: 2px 7px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  &::after{
    position: absolute;
    height: 2px;
    background-color: #343534;
    content: '';
    bottom: 0;
    left: 0;
    width: 0;
    transition: all .3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Logo = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
  position: relative;
  z-index: 3;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  color: ${(props) => props.color};
  a {
    display: inline-block;
    min-width: 20px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const StyledHeader = styled.header`
  background-color: ${props => !props.transparentByDefault ? 'white' : props.backgroundColor};
  ${props => props.transparentByDefault ? `
    position: fixed;
  ` : `
    position: sticky;
    border-bottom: 1px solid #dedede;
  `}
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: white;
    ${Logo},
    ${NavLink},
    ${StyledLink} {
      color: black;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center; 
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  gap: 15px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ mobileNavActive }) => (mobileNavActive ? "0" : "-100%")};
  right: 0;
  background-color: transparent;
  transition: left 0.3s ease;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    left: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2px;
  opacity: 0;
  z-index: 999;
  visibility: hidden; 
  pointer-events: none; 
  border-radius: 4px;
  padding: 10px 0;
  li {
    padding: 10px 20px;
    list-style-type: none;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
const NewDropdown = styled.ul`
  position: fixed;
  top: 60px; 
  right: 0; 
  left: 50%;
  transform: translateX(-50%); 
  height: 500px;
  width: 100vw; 
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  margin-bottom: 0; 
  padding: 0;
  opacity: 0;
  z-index: 998;
  visibility: hidden;
  pointer-events: none;
  border-radius: 4px;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  li {
    list-style-type: none;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const NavLinkWithDropdown = styled(NavLink)`
  position: relative;
  &:hover ${Dropdown}, &:hover ${NewDropdown} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const NewNavLinkWithDropdown = styled(NavLinkWithDropdown)`
  position: relative;
  &:hover ${Dropdown}, &:hover ${NewDropdown} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const Grid = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  h4 {
    text-transform: uppercase;
  }
  nav a {
    display: block;
    text-decoration: none;
    color: #6e6e6e;
    margin-bottom: 12px;
  }
  p {
    color: #6e6e6c;
  }
`;
const ContactOuter = styled.div`
  border-top: 1px solid #cfcec8;
  margin-top: 80px;
  padding: 40px 0;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out all;
  }
`;

const ImageComponent = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 40px;
  color: white;
  font-size: 20px;
  padding: 5px 10px;
`;
export default function Header({transparentByDefault=true,categories}) {
  const { cartProducts } = useContext(CartContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(transparentByDefault ? "transparent" : 'white');
  const [color, setColor] = useState(transparentByDefault ? "white" : '#343534');
  const [sideColor, setSideColor] = useState(transparentByDefault ? "white" : '#343534');
  const [linkColor, setLinkColor] = useState(transparentByDefault ? "white" : '#343534');
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setBackgroundColor("white");
      setColor("black");
      setSideColor("black");
      setLinkColor("black");
    } else {
      setBackgroundColor(transparentByDefault ? "transparent" : 'white');
      setColor(transparentByDefault ? "white" : '#343534');
      setSideColor(transparentByDefault ? "white" : '#343534');
      setLinkColor(transparentByDefault ? "white" : '#343534');
    }
  }, [scrollPosition]);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return;
  }

  return <Header2
    transparentByDefault={transparentByDefault}
    categories={categories}
    cartProducts={cartProducts}
  />

  return (
    <StyledHeader transparentByDefault={transparentByDefault} backgroundColor={backgroundColor}>
      <Center>
        <Wrapper>
          <StyledNav mobileNavActive={mobileNavActive} color={linkColor}>
            <HeaderNav />
            <NavLinkWithDropdown color={linkColor} href={"/"}>
              Home
            </NavLinkWithDropdown>

            <NavLinkWithDropdown color={linkColor} href={"/products"}>
              Produkty
              <NewDropdown>
                <div>
                  <Grid>
                    <div style={{ marginLeft: "70px", marginTop: "30px" }}>
                      <h4>Ubrania</h4>
                      <nav>
                        {categories?.length > 0 && categories.map(category => (
                          <NewNavLinkWithDropdown key={category._id} href={`/category/${category._id}`}>
                            {category.name}
                          </NewNavLinkWithDropdown>
                        ))}
                      </nav>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <h4>Featured</h4>
                      <nav>
                        <NewNavLinkWithDropdown href="">
                          Essential Collections
                        </NewNavLinkWithDropdown>
                        <NewNavLinkWithDropdown href="">
                          Best Sellers
                        </NewNavLinkWithDropdown>
                        <NewNavLinkWithDropdown href="">
                          RecyCools Capsule
                        </NewNavLinkWithDropdown>
                        <NewNavLinkWithDropdown href="">
                          Shop Sale
                        </NewNavLinkWithDropdown>
                      </nav>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <h4>Culture Club</h4>
                      <nav>
                        <NewNavLinkWithDropdown href="">
                          Club News
                        </NewNavLinkWithDropdown>
                        <NewNavLinkWithDropdown href="">
                          My Island Home Look Book
                        </NewNavLinkWithDropdown>
                      </nav>
                    </div>
                    <div>
                      <ImageContainer>
                        <ImageComponent
                          src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width="300px"
                          height="300px"
                          alt="image"
                          style={{ marginTop: "30px", borderRadius: "5px" }}
                        />
                        <TextOverlay>
                          <h1>Awesome Products </h1>
                        </TextOverlay>
                      </ImageContainer>
                    </div>
                  </Grid>
                </div>
              </NewDropdown>
            </NavLinkWithDropdown>
            <NavLinkWithDropdown color={linkColor} href={"/contacts"}>
              Kontakt
              
            </NavLinkWithDropdown>
          </StyledNav>
          <Logo color={color} href={"/"}>
            Ecommerce
          </Logo>
          <SideIcons>
            <NavLink href={"/cart"} color={linkColor}>
              <CartIcon /> <sup>{cartProducts.length}</sup>
            </NavLink>
            <StyledLink href={"/search"} color={linkColor}>
              <SearchIcon color={color} />
            </StyledLink>
            <NavButton
              color={sideColor}
              onClick={() => setMobileNavActive((prev) => !prev)}
            >
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
