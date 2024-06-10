import styled from "styled-components";
import {displayProps} from "@/lib/helpers";

const StyledOrder = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  gap: 20px;
  align-items: center;
  time{
    font-size: 1rem;
    color: #555;
  }
`;
const ProductRow = styled.div`
  span{
    color:#aaa;
  }
  p{
    margin: 0 0 5px;
    color:#aaa;
    font-size: .8em;
  }
`;
const Address = styled.div`
  font-size:.8rem;
  line-height:1rem;
  margin-top: 5px;
  color:#888;
`;

export default function SingleOrder({cartProducts,createdAt,...rest}) {
  return (
    <StyledOrder>
      <div>
        <time>{(new Date(createdAt)).toLocaleString('pl-PL')}</time>
        <Address>
          {rest.name}<br />
          {rest.email}<br />
          {rest.streetAddress}<br />
          {rest.postalCode} {rest.city}, {rest.country}
        </Address>
      </div>
      <div>
        {cartProducts.map((item,key) => (
          <ProductRow key={key}>
            <span>1 x </span>
            {item.title}
            <p>{displayProps(item.props)}</p>
          </ProductRow>
        ))}
      </div>
    </StyledOrder>
  );
}