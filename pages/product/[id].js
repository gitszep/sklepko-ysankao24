import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductSection from "@/components/sections/ProductSection";
import Footer from "@/components/Footer";
import ImageAndText from "@/components/sections/ImageAndText";
import {Category} from "@/models/Category";
import BgImgAndText from "@/components/sections/BgImgAndText";


export default function ProductPage({product, categories}) {
  return (
    <>
      <Header categories={categories} transparentByDefault={false} />
      <Center>
        <ProductSection product={product} />
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
      <Footer categories={categories} />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      categories: JSON.parse(JSON.stringify(await Category.find())),
    }
  }
}