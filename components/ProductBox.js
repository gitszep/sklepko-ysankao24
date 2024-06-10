import styled from "styled-components";
import Link from "next/link";
import {formatPrice} from "@/lib/helpers";

const ProductWrapper = styled.div`
  button{
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #eee;
  height: 275px;
  display: block;
  @media (min-width: 768px) {
    height: 475px;
  }
  img{
    width: 100%;
    height: 275px;
    object-fit: cover;
    @media (min-width: 768px) {
      height: 475px;
    }
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
  color: #5c5c5c;
`;

const Price = styled.div`
  margin-top: 5px;
  font-size: 1rem;
  text-align: left;
`;

export default function ProductBox({
  _id,title,price,images,
}) {
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt=""/>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <Price>
          {formatPrice(price)}
        </Price>
      </ProductInfoBox>
    </ProductWrapper>
  );
}