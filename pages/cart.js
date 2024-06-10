import Header from "@/components/Header";
import styled, {css} from "styled-components";
import Center from "@/components/Center";
import Button, {AlchemyButtonStyle, AlchemyUnderlineButtonStyle, AlchemyWhiteButtonStyle} from "@/components/Button";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import {RevealWrapper} from "next-reveal";
import {useSession} from "next-auth/react";
import IntroSection from "@/components/sections/IntroSection";
import {displayProps, formatPrice} from "@/lib/helpers";
import Footer from "@/components/Footer";
import {InpostGeowidgetReact} from "inpost-geowidget-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowRight, faSpinner} from "@fortawesome/free-solid-svg-icons";
import Modal from "@/components/Modal";
import {mongooseConnect} from "@/lib/mongoose";
import {Category} from "@/models/Category";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  table thead tr th:nth-child(3),
  table tbody tr td:nth-child(3),
  table tbody tr.subtotal td:nth-child(2){
    text-align: right;
  }
  table tr.subtotal td{
    padding: 15px 0;
  }
  table tbody tr.subtotal td:nth-child(2){
    font-size: 1.2rem;
  }
  tr.total td{
    font-weight: bold;
  }
`;

const Box = styled.div`
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  button{padding:0 !important;}
`;

const ProductImageBox = styled.div`
  padding: 2px;
  display:flex;
  gap: 20px;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
  img{
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    img{
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 6px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 10px;
`;

const ProductTitle = styled.div``;
const ProductProps = styled.div``;
const MoreLessOuter = styled.div`
  border: 1px solid #dedede;
  display: inline-flex;
  align-items: center;
  button{
    background-color: transparent;
  }
`;
const PaymentButton = styled(Button)`
  padding: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  &:disabled{
    background-color: #aaa;
    color:#eee;
  }
`;
const DeliveryOptions = styled.div`
  display: inline-grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-top: 5px;
`;
const DeliveryOption = styled.div`
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.active && css`
    border-color: #000;
  `}
  ${props => !props.active && css`
    color: #999;
  `}
  h4{
    font-size: 1.2rem;
    margin: 0;
    font-weight: normal;
  }
  p{
    margin: 0;
    font-size: .7rem;
  }
`;

export default function CartPage({categories}) {
  const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
  const {data:session} = useSession();
  const [products,setProducts] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [postalCode,setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');
  const [isSuccess,setIsSuccess] = useState(false);
  const [dpdFee, setDpdFee] = useState(null);
  const [inpostFee, setInpostFee] = useState(null);
  const [showParcelLockerPicker, setShowParcelLockerPicker] = useState(false);
  const [selectedParcelLocker, setSelectedParcelLocker] = useState(null);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', {ids:cartProducts.map(o => o.id)})
        .then(response => {
          setProducts(response.data);
        })
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
    axios.get('/api/settings?name=dpdFee').then(res => {
      setDpdFee(parseFloat(res.data.value));
    });
    axios.get('/api/settings?name=inpostFee').then(res => {
      setInpostFee(parseFloat(res.data.value));
    });
  }, []);
  useEffect(() => {
    if (!session) {
      return;
    }
    axios.get('/api/address').then(response => {
      if (!response.data) return;
      setName(response.data.name);
      setEmail(response.data.email);
      setCity(response.data.city);
      setPostalCode(response.data.postalCode);
      setStreetAddress(response.data.streetAddress);
      setCountry(response.data.country);
    });
  }, [session]);
  function moreOfThisProduct(id, props) {
    addProduct(id, props);
  }
  function lessOfThisProduct(id, props) {
    removeProduct(id, props, true);
  }
  async function goToPayment() {
    setIsSendingOrder(true);
    const response = await axios.post('/api/checkout', {
      name,email,city,postalCode,streetAddress,country,
      cartProducts, selectedDeliveryOption, selectedParcelLocker,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
    setIsSendingOrder(false);
  }
  let productsTotal = 0;
  for (const product of cartProducts) {
    const price = products.find(p => p._id === product.id)?.price || 0;
    productsTotal += price;
  }

  const productsCounts = {};
  cartProducts.forEach(({id,props}) => {
    const key = id + JSON.stringify(props);
    if (!(key in productsCounts)) {
      productsCounts[key] = {id, props, count:1};
    } else {
      productsCounts[key].count++;
    }
  });

  const readyToCheckout = (
    name && email && city && postalCode && streetAddress && country && (
      selectedDeliveryOption==='dpd' || (selectedDeliveryOption==='inpost' && selectedParcelLocker)
    )
  );

  let shippingFee = null;
  if (selectedDeliveryOption === 'dpd') {
    shippingFee = dpdFee;
  }
  if (selectedDeliveryOption === 'inpost') {
    shippingFee = inpostFee;
  }

  if (isSuccess) {
    return (
      <>
        <Header categories={categories} transparentByDefault={false} />
        <IntroSection header="Koszyk" />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Dziekujemy za zlozenie zamowienia!</h1>
              <p>Powiadomimy Cie emailem jak zamowienie zostanie wyslane</p>
            </Box>
          </ColumnsWrapper>
        </Center>
        <Footer categories={categories} />
      </>
    );
  }
  return (
    <>
      <Header categories={categories} transparentByDefault={false} />
      <IntroSection header="Koszyk" />
      <Center>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && (
              <div>Your cart is empty</div>
            )}
            {products?.length > 0 && (
              <Table>
                <thead>
                <tr>
                  <th>Produkt</th>
                  <th>Ilość</th>
                  <th>Cena</th>
                </tr>
                </thead>
                <tbody>
                {Object.values(productsCounts).map(({id, props, count}) => {
                  const product = products.find(p => p._id.toString() === id.toString());
                  return (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt=""/>
                          <div>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductProps>
                              {displayProps(props)}
                            </ProductProps>
                          </div>
                        </ProductImageBox>
                      </ProductInfoCell>
                      <td>
                        <MoreLessOuter>
                          <Button
                            onClick={() => lessOfThisProduct(product._id, props)}>-</Button>
                          <QuantityLabel>
                            {count}
                          </QuantityLabel>
                          <Button
                            onClick={() => moreOfThisProduct(product._id, props)}>+</Button>
                        </MoreLessOuter>
                      </td>
                      <td>
                        {formatPrice(count * product.price)}
                      </td>
                    </tr>
                  );
                })}
                <tr className="subtotal">
                  <td colSpan={2}>Koszyk</td>
                  <td>{formatPrice(productsTotal)}</td>
                </tr>
                <tr className="subtotal">
                  <td colSpan={2}>
                    Dostawa<br/>
                    <DeliveryOptions>
                      <DeliveryOption
                        active={selectedDeliveryOption === 'dpd'}
                        onClick={() => setSelectedDeliveryOption('dpd')}>
                        <h4>DPD</h4>
                        <p>dostawa do domu</p>
                      </DeliveryOption>
                      <DeliveryOption
                        active={selectedDeliveryOption === 'inpost'}
                        onClick={() => {
                          if (selectedDeliveryOption === 'inpost' || !selectedParcelLocker) {
                            setShowParcelLockerPicker(true);
                          }
                          setSelectedDeliveryOption('inpost');
                        }}>
                        <h4>INPOST</h4>
                        {selectedParcelLocker ? (
                          <>
                            <p>{selectedParcelLocker.address.line1}, {selectedParcelLocker.address.line2}</p>
                          </>
                        ) : (
                          <p>paczkomat</p>
                        )}
                      </DeliveryOption>
                    </DeliveryOptions>
                    <Modal
                      onHide={() => setShowParcelLockerPicker(false)}
                      show={showParcelLockerPicker}
                      title="Wybierz paczkomat">
                      <div style={{height: '500px'}}>
                        <InpostGeowidgetReact
                          token={process.env.NEXT_PUBLIC_INPOST_GEOWIDGET}
                          identifier={'geo1'}
                          apiReady={() => {}}
                          pointSelect={v => {
                            setSelectedParcelLocker(v);
                            setShowParcelLockerPicker(false);
                          }}/>
                      </div>
                    </Modal>
                  </td>
                  <td>
                    {!selectedDeliveryOption && ''}
                    {selectedDeliveryOption && formatPrice(shippingFee)}
                  </td>
                </tr>
                <tr className="subtotal">
                  <td colSpan={2}>Razem</td>
                  <td>{formatPrice(productsTotal + shippingFee)}</td>
                </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              Imie i nazwisko:
              <Input type="text"
                     placeholder="Name"
                     value={name}
                     name="name"
                     onChange={ev => setName(ev.target.value)}/>
              Email:
              <Input type="text"
                     placeholder="Email"
                     value={email}
                     name="email"
                     onChange={ev => setEmail(ev.target.value)}/>
              <CityHolder>
                <div>
                  Miasto:
                  <Input type="text"
                         placeholder="City"
                         value={city}
                         name="city"
                         onChange={ev => setCity(ev.target.value)}/>
                </div>
                <div>
                  Kod pocztowy:
                  <Input type="text"
                         placeholder="Postal Code"
                         value={postalCode}
                         name="postalCode"
                         onChange={ev => setPostalCode(ev.target.value)}/>
                </div>
              </CityHolder>
              ulica oraz nr domu / nr mieszkania:
              <Input type="text"
                     placeholder="Street Address"
                     value={streetAddress}
                     name="streetAddress"
                     onChange={ev => setStreetAddress(ev.target.value)}/>
              Państwo:
              <Input type="text"
                     placeholder="Country"
                     value={country}
                     name="country"
                     onChange={ev => setCountry(ev.target.value)}/>
              <PaymentButton black block
                             disabled={!readyToCheckout || isSendingOrder}
                             onClick={goToPayment}>
                {isSendingOrder ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin={true} /> Momencik...
                  </>
                ) : (
                  <>
                    Przejdź do płatności <FontAwesomeIcon icon={faArrowCircleRight} />
                  </>
                )}
              </PaymentButton>
            </Box>
          )}
        </ColumnsWrapper>

      </Center>
      <Footer categories={categories}/>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(await Category.find())),
    },
  }
}