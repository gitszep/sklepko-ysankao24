import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";
import Hero from "@/components/Hero";
import ImageProps from "@/components/ImageProps";
import TextParts from "@/components/TextParts";
import Footer from "@/components/Footer";
import {Category} from "@/models/Category";
import NewProducts from "@/components/NewProducts";
import ImageAndText from "@/components/sections/ImageAndText";
import BgImgAndText from "@/components/sections/BgImgAndText";





const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin: 0;
  padding: 0 20px;
  text-align: center;
`;

export default function ProductsPage({ products, wishedProducts, categories }) {
  return (
    <>
      <Header categories={categories} transparentByDefault={true} />
      <Hero>
        <ImageProps src="https://piano-toys.myshopify.com/cdn/shop/files/1.jpg?v=1718188442&width=1070" />
        <TextParts>
          <Title>Witamy w Kołysance </Title>
          <Description>
             Sprawdź naszą ofertę i znajdź coś, co wywoła uśmiech na twarzy Twojego dziecka.
          </Description>
        </TextParts>
      </Hero>
      <Center>
        <NewProducts products={products} wishedProducts={wishedProducts} label="Produkty " />
        
      </Center>
      <Center bgColor="#fff">
        <ImageAndText
          img="https://piano-toys.myshopify.com/cdn/shop/articles/07.jpg?v=1718368498&width=720"
          title="Kim jest  Cool Girl?"
          description="To dziewczyna z charakterem, elegancka i bezpośrednia. Doskonale wie, czego chce i za czym stoi. Porusza się z gracją między ultra kobiecością a odrobiną chłopięcego stylu."
          buttonLink="/products"
          buttonLabel="Zobacz"
          contentBg="#C6C7A4"
        />
      </Center>
      




      <BgImgAndText
        img="https://piano-toys.myshopify.com/cdn/shop/files/1.jpg?=1718188442&width=1070" 
        title="Zobacz i dołącz do zabawy"
        description="Świętujemy to, co oznacza być dzieckiem dzisiaj. Wspieramy pewność siebie i wyrażanie siebie, oferując przestrzeń, w której dzieci mogą się spotkać i być sobą.."
        buttonLabel="Zobacz zabawki"
        buttonLink="/products"
      />
      <Footer  categories={categories} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedProducts = session?.user
    ? await WishedProduct.find({
        userEmail: session?.user.email,
        product: products.map((p) => p._id.toString()),
      })
    : [];
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      wishedProducts: wishedProducts.map((i) => i.product.toString()),
      categories: JSON.parse(JSON.stringify(await Category.find())),
    },
  };
}
