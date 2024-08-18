import styled from "styled-components";
import Center from "@/components/Center";
import ContactRow from "@/components/sections/ContactRow";
import Link from "next/link";

const StyledFooter = styled.footer`
  background-color:#F6F4ED;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 20px 0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 80px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  h4{
    text-transform: uppercase;
  }
  nav a{
    display: block;
    text-decoration: none;
    color: #6e6e6e;
    margin-bottom: 12px;
    &:hover{
      text-decoration: underline;
    }
  }
  p{
    color: #6e6e6c;
  }
`;

const ContactOuter = styled.div`
  border-top: 1px solid #cfcec8;
  margin-top: 80px;
  padding: 40px 0;
`;

export default function Footer({categories}) {
  return (
    <StyledFooter>
      <Center>
        <Grid>
          <div>
            <h4>Zabawki</h4>
            <nav>
              {categories?.length > 0 && categories.map(category => (
                <Link key={category._id} href={`/category/${category._id}`}>{category.name}</Link>
              ))}
            </nav>
          </div>
          <div>
          <h4>Help</h4>
            <nav>
              <a href="">Home</a>
              <a href="">Sklep</a>
              <a href="">Kontakt</a>
              <Link href="/regulamin">Regulamin</Link>
              <Link href="/politykaprywatnosci">Polityka prywatności</Link>    
            </nav>
          </div>
          <div>
            <h4>O naszym sklepie</h4>
            <p>Każda zabawka, którą oferujemy, jest inspirowana radością i kreatywnością dzieci. W naszym sklepie doceniamy to, co oznacza być dzieckiem dzisiaj. Zachęcamy do odkrywania siebie i rozwijania wyobraźni. To miejsce, gdzie dzieci  mogą znaleźć zabawki, które sprawią im radość <br/> i pomogą wyrazić siebie.</p>
          </div>
        </Grid>
      </Center>
      <ContactOuter>
        <Center>
          <ContactRow />
        </Center>
      </ContactOuter>
    </StyledFooter>
  );
}