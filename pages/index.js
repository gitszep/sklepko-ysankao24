import Header from "@/components/Header";
import Featured from "@/components/Featured";
import FullWidthColumns from "@/components/sections/FullWidthColumns";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import {WishedProduct} from "@/models/WishedProduct";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Setting} from "@/models/Setting";
import ProductSection from "@/components/sections/ProductSection";
import Center from "@/components/Center";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ImageAndText from "@/components/sections/ImageAndText";
import NewsSection from "@/components/sections/NewsSection";
import BgImgAndText from "@/components/sections/BgImgAndText";
import Footer from "@/components/Footer";
import {Category} from "@/models/Category";

export default function HomePage({featuredProduct,newProducts,wishedNewProducts,categories}) {
  return (
    <div>
      <Header categories={categories} />
      <FullWidthColumns columns={[
        {
          title: 'New Arrivals',
          text: 'We believe in good times and good vibes. Join the club!',
          buttonLink: '/products',
          buttonText: 'Show the capsule',
          image: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/A34I8428-_3.jpg?v=1644259777&width=1440',
        },
        {
          title: 'Holidazed',
          text: 'Inspired by our members, real girls real life.',
          buttonLink: '/products',
          buttonText: 'Show now',
          image: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/A34I8082.jpg?v=1643881925&width=1200',
        },
      ]} />

      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />

      <FullWidthColumns buttonTheme="underline" columns={[
        {
          title: 'Suntoucher',
          buttonLink: '/products',
          buttonText: 'shop now',
          image: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/505W-Q122_0.jpg?v=1643881448&width=960',
        },
        {
          title: 'New Arrivals',
          buttonLink: '/products',
          buttonText: 'explore now',
          image: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/A34I8351.jpg?v=1643881546&width=960',
        },
        {
          title: 'Recycools',
          buttonLink: '/products',
          buttonText: 'shop now',
          image: 'https://alchemy-theme-modern.myshopify.com/cdn/shop/files/271474247_3456496524474861_7372086529365969756_n.jpg?v=1642774701&width=960',
        },
      ]} />

      {featuredProduct && (
        <Center>
          <ProductSection product={featuredProduct} />
        </Center>
      )}

      <img style={{width:'100%'}} src="https://alchemy-theme-modern.myshopify.com/cdn/shop/files/Cools_Club_blog_India_banner.jpg?v=1644246632&width=1366" alt=""/>

      <TestimonialsSection />

      <Center bgColor="#D4B2A8">
        <ImageAndText
          img="https://alchemy-theme-modern.myshopify.com/cdn/shop/files/271474247_3456496524474861_7372086529365969756_n.jpg?v=1642774701&width=960"
          title="Everything we create is inspired by real girls, real life."
          description="We don't accept ordinary. We believe everyone has the power to be ordinary. Our clothing and accessories provide a platform for self-expression served up with a slice of keeping it real."
          buttonLabel="Show now"
          buttonLink="/products"
        />
      </Center>

      <Center bgColor="#fff">
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
        ]} />
      </Center>

      <Center bgColor="#fff">
        <ImageAndText
          img="https://alchemy-theme-modern.myshopify.com/cdn/shop/files/INSTA-09.jpg?v=1644155206&width=1200"
          title="Who is the Cools Girl?"
          description="She's sassy, sophisticated, a real straight shooter. She knows what she wants and what she stands for. She walks the fine line between being ultra femme while flirting with her tomboy side."
          buttonLink="/products"
          buttonLabel="Our story"
          contentBg="#C6C7A4"
        />
      </Center>

      <BgImgAndText
        img="https://alchemy-theme-modern.myshopify.com/cdn/shop/files/cc-banner-web_2200xv2.jpg?v=1642778161&width=1920"
        title="Come and join the party"
        description="We celebrate what it means to be a girl today. We encourage self-confidence and self-expression, a place where girls from different worlds can come together and be themselves."
        buttonLabel="Show clothing"
        buttonLink="/products"
      />

      <Footer categories={categories} />

    </div>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const featuredProductSetting = await Setting.findOne({name:'featuredProductId'});
  const featuredProductId = featuredProductSetting?.value;
  const featuredProduct = featuredProductId ? await Product.findById(featuredProductId) : null;
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:3});
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedNewProducts = session?.user
    ? await WishedProduct.find({
        userEmail:session.user.email,
        product: newProducts.map(p => p._id.toString()),
      })
    : [];
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
      categories: JSON.parse(JSON.stringify(await Category.find())),
    },
  };
}
