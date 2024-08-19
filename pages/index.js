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
          title: 'Nowości',
          text: 'Wierzymy w świetną zabawę i pozytywną atmosferę. ',
          buttonLink: '/products',
          buttonText: 'Dołącz do naszej paczki!',
          image: 'https://toyel-store-demo.myshopify.com/cdn/shop/files/ba22.jpg?v=1660531284',
        },
        {
          title: 'Najlepsze',
          text: 'Inspirowane naszymi prawdziwymi maluchami.  ',
          buttonLink: '/products',
          buttonText: 'Najlepsze zabawki!',
          image: 'https://toyel-store-demo.myshopify.com/cdn/shop/files/ba24.jpg?v=1660532110',
        },
      ]} />

      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />

      <FullWidthColumns buttonTheme="underline" columns={[
        {
          title: 'Przyjazne',
          buttonLink: '/products',
          buttonText: 'Zobacz',
          image: 'https://piano-toys.myshopify.com/cdn/shop/files/p2_0b389dfc-5884-467e-a0af-20ef876bc7ed.jpg?v=1720257019&width=750',
        },
        {
          title: 'Nowości',
          buttonLink: '/products',
          buttonText: 'Zobacz',
          image: 'https://piano-toys.myshopify.com/cdn/shop/files/R_1.jpg?v=1720176002&width=750',
        },
        {
          title: 'Ekologiczne ',
          buttonLink: '/products',
          buttonText: 'Zobacz',
          image: 'https://piano-toys.myshopify.com/cdn/shop/files/R_2.jpg?v=1720176002&width=750',
        },
      ]} />

      {featuredProduct && (
        <Center>
          <ProductSection product={featuredProduct} />
        </Center>
      )}

      <img style={{width:'100%'}} src="https://toytime-theme.myshopify.com/cdn/shop/files/Rectangle_7.jpg?v=1707907252&width=2000" alt=""/>

      <TestimonialsSection />

      

      <Center bgColor="#D4B2A8">
        <ImageAndText
          img="https://piano-toys.myshopify.com/cdn/shop/files/1_9f93784d-a8e2-48cd-941c-5184a3c0cba4.jpg?v=1718190834&width=1500"
          title="Każda nasza zabawka powstaje z myślą o prawdziwych dzieciach i ich codziennych przygodach."
          description=" Wierzymy, że każde dziecko ma w sobie niezwykłą moc. Nasze zabawki i akcesoria stają się sposobem do wyrażania siebie, jednocześnie zachowując autentyczność."
          buttonLabel="Zobacz"
          buttonLink="/products"
        />
      </Center>

      <Center bgColor="#fff">
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
        ]} />
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
