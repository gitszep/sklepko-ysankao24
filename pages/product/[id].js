import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductSection from "@/components/sections/ProductSection";
import Footer from "@/components/Footer";
import ImageAndText from "@/components/sections/ImageAndText";
import {Category} from "@/models/Category";


export default function ProductPage({product, categories}) {
  return (
    <>
      <Header categories={categories} transparentByDefault={false} />
      <Center>
        <ProductSection product={product} />
      </Center>
      <Center bgColor={'#fff'}>
        <ImageAndText
          img={'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/000098290015.jpg?v=1644157130&width=600'}
          title={'People, places, positivity'}
          description={'The vision behind us is to create a culture all about good times, good vibes, and good style.'}
          buttonLabel={'Our story'}
          buttonLink={'/'}
          contentBg={'#96D9DE'}
        />
      </Center>
      <Center bgColor={'#F7E7C1'}>
        <ImageAndText
          img={'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/INSTA-05_c8f8808c-738d-4c1d-9140-c7a7530fb5e4.jpg?v=1644157274&width=600'}
          title={'We\'re lifestyle first and foremost'}
          description={'We live for making memories that will last a lifetime and believe wandering sure beats wondering. This \'live in the moment\' mentality transcends into our style.'}
          buttonLabel={'Show app'}
          buttonLink={'/products'}
          contentPosition={'left'}
        />
      </Center>
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