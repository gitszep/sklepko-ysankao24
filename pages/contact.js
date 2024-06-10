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
        <ImageProps src="https://alchemy-theme-modern.myshopify.com/cdn/shop/files/Cools-Club_blog_02_Cover.jpg"/>
        <TextParts>
          <Title>Contact</Title>

        </TextParts>
      </Hero>


      <Products>
        <br/>
        <br/>

        <Title>Need assistance?</Title>
        <Description style={{textAlign: 'center', marginTop: '5px'}}>We’re happy to help! Just fill out the form below
          and we’ll be in touch in under 24 hours.</Description>
        <Center>


          <Container>


            <MyForm action="">
              <MyLabel>Name*</MyLabel>
              <MyInput type="text" placeholder="Enter Your name"></MyInput> <MyLabel>Email*</MyLabel>
              <MyInput type="email" placeholder="Enter Your name"></MyInput>
              <TextAreaLabel>Messsage*</TextAreaLabel>
              <MyTextArea></MyTextArea>
              <Button>Send</Button>
            </MyForm>
          </Container>

          <br/>
          <br/>
          <br/>
          <NewsSection news={[
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1644230433&width=1160',
              title: 'Aloha Summer',
              link: '/products',
              description: 'Everything we create is inspired by our members, real girls, real life. We celebrate what it means to be a girl today. We encourage self-confidence and self-expression, a place where girls from different worlds can come...',
            },
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-4.jpg?v=1644232716&width=540',
              title: 'Kasia',
              link: '/products',
              description: 'We played dress-up with Kasia for the launch of our new collection \'Better Than One\'. Full spring/summer collection available online....',
            },
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-3.jpg?v=1644231998&width=540',
              title: 'Stand by Cools',
              link: '/products',
              description: 'We played dress-up with Kasia for the launch of our new collection \'Better Than One\'. Full spring/summer collection available online....',
            },
            {
              img: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1644230448&width=540',
              title: 'Aloha Summer',
              link: '/products',
              description: 'We played dress-up with Kasia for the launch of our new collection \'Better Than One\'. Full spring/summer collection available online....',
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