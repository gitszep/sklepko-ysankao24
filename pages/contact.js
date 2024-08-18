import Center from "@/components/Center";
import Description from "@/components/Description";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageProps from "@/components/ImageProps";
import TextParts from "@/components/TextParts";
import styled from "styled-components";
import NewsSection from "@/components/sections/NewsSection";
import Footer from "@/components/Footer";
import {mongooseConnect} from "@/lib/mongoose";
import {Category} from "@/models/Category";

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 40px;
  text-align: center;


`;

const MyInput = styled.input`
  height: 50px;
  width: 100%;
  max-width: 500px;
  font-size: 20px;

  border: 1px solid gray;
  padding: 2px 10px;
  margin-top: 15px;
`;
const MyTextArea = styled.textarea`
  height: 150px;
  width: 100%;
  max-width: 500px;
  font-size: 20px;
  border: 1px solid gray;
  padding: 7px 10px;
  margin-top: 10px;
  resize: none;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

`;


const MyLabel = styled.label`
  margin-right: 470px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;
  @media only screen and (max-width: 600px) {
    margin-right: 40px;
  }


`;
const TextAreaLabel = styled.label`
  margin-right: 430px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 15px;
  @media only screen and (max-width: 600px) {
    margin-right: 40px;
  }



`;
const Products = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  background-color: white;
  top: -80px;
`;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

`
const Button = styled.button`
  margin-top: 10px;
  height: 50px;
  width: 100px;
  border: 2px solid transparent;
  background-color: #222;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black

  }
`


export default function contactPage({categories}) {
  return (
    <>
      <Header categories={categories}/>

      <Hero>
        <ImageProps src="https://toytime-theme.myshopify.com/cdn/shop/files/Rectangle_7.jpg?v=1707907252&width=2000"/>
        <TextParts>
          <Title></Title>

        </TextParts>
      </Hero>


      <Products>
        <br/>
        <br/>

        <Title>Potrzebujesz pomocy?</Title>
        <Description style={{textAlign: 'center', marginTop: '5px'}}>Z przyjemnością pomożemy! Wypełnij poniższy formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.</Description>
        <Center>


          <Container>


            <MyForm action="">
              <MyLabel>Nazwa*</MyLabel>
              <MyInput type="text" placeholder="Enter Your name"></MyInput> <MyLabel>Email*</MyLabel>
              <MyInput type="email" placeholder="Enter Your name"></MyInput>
              <TextAreaLabel>Wiadomość*</TextAreaLabel>
              <MyTextArea></MyTextArea>
              <Button>Wyślij</Button>
            </MyForm>
          </Container>

          <br/>
          <br/>
          <br/>
          <NewsSection news={[
              {
                img: 'https://piano-toys.myshopify.com/cdn/shop/articles/05.jpg?v=1718368421&width=720',
                title: 'Kołysanka ',
                link: '/products',
                description: 'Każda nasza zabawka powstaje z myślą o prawdziwych dzieciach i ich codziennych przygodach...',
              },
              {
                img: 'https://piano-toys.myshopify.com/cdn/shop/articles/06.jpg?v=1718368664&width=720',
                title: 'Kasia',
                link: '/products',
                description: 'Pełna wiosenno-letnia kolekcja zabawek jest już dostępna online.',
              },
              {
                img: 'https://piano-toys.myshopify.com/cdn/shop/articles/01_8ae62cd4-b1fb-4ad1-a863-1edcb92ba865.jpg?v=1718368369&width=720',
                title: 'Jarek',
                link: '/products',
                description: 'Świetnie się bawiliśmy, testując nasze nowe zabawki przy okazji premiery najnowszej kolekcji.   ',
              },
              {
                img: 'https://piano-toys.myshopify.com/cdn/shop/articles/03_483d3dda-72a7-4574-9a96-c533e8cf2d35.jpg?v=1718368500&width=720',
                title: 'Patrycja ',
                link: '/products',
                description: 'Każdy produkt to małe dzieło sztuki, stworzone z pasją i dbałością o najmniejsze detale.',
              },
          ]}/>

        </Center>
      </Products>
      <Footer categories={categories} />

    </>
  )

}

export async function getServerSideProps() {
  await mongooseConnect();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(await Category.find())),
    },
  }
}