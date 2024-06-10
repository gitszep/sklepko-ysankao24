import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import ProductProps from "@/components/ProductProps";
import FlyingButton from "@/components/FlyingButton";
import Accordion from "@/components/Accordion";
import styled from "styled-components";
import {useState} from "react";
import {formatPrice} from "@/lib/helpers";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  hr{
    border-color:#e0e0e0;
    margin: 20px 0;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.25fr .75fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;
const AccordionWrapper = styled.div`
  border-top: 2px solid #5c5c5c;
  margin-top: 40px;
`;

export default function ProductSection({product}) {

  const propsKeys = Object.keys(product.properties || {});
  const propsDefaults = {};
  propsKeys.forEach(key => Object.assign(propsDefaults, {[key]: product.properties[key].split(',')[0]}));

  const [selectedProps, setSelectedProps] = useState(propsDefaults);
  return (
    <ColWrapper>
      <ProductImages images={product.images} />
      <div>
        <Title>{product.title}</Title>
        <Price>{formatPrice(product.price)}</Price>
        <hr/>
        <ProductProps
          properties={product.properties}
          selectedProps={selectedProps}
          onChange={(key, value) => setSelectedProps(prev => ({...prev, [key]: value}))}
        />
        <FlyingButton main _id={product._id} selectedProps={selectedProps} src={product.images?.[0]}>
          Add to cart
        </FlyingButton>
        <AccordionWrapper>
          <Accordion items={[
            {title: 'Description', text: product.description},
            {title: 'Details', text: product.details},
          ]} />
        </AccordionWrapper>
      </div>
    </ColWrapper>
  );
}