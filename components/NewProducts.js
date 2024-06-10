import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import Link from "next/link";
import {AlchemyButtonStyle} from "@/components/Button";

const Title = styled.h2`
  font-size: 2rem;
  margin:20px 0 10px;
  @media (min-width: 1024px) {
    margin:30px 0 20px;
  }
  font-weight: normal;
  text-align: center;
`;

const LatestProductsBox = styled.div`
  margin-top: -40px;
  background-color:#fff;
  position: relative;
  z-index: 3;
  padding: 10px;
  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
  .footer{
    margin: 40px;
    text-align: center;
  }
  .footer > a{
    ${AlchemyButtonStyle};
  }
`;

export default function NewProducts({products,wishedProducts,label='New Arrivals'}) {
  return (
    <Center>
      <LatestProductsBox>
        <Title>{label}</Title>
        <ProductsGrid products={products} wishedProducts={wishedProducts} />
        <div className="footer">
          <Link href={'/products'}>View all</Link>
        </div>
      </LatestProductsBox>
    </Center>
  );
}