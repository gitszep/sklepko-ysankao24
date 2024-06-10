import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {Order} from "@/models/Order";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {Setting} from "@/models/Setting";
import {createTransaction} from "@/lib/tpay";

export default async function handler(req,res) {
  if (req.method !== 'POST') {
    res.json('should be a POST request');
    return;
  }

  const {
    name,email,city,
    postalCode,streetAddress,country,
    cartProducts,
    selectedDeliveryOption, selectedParcelLocker,
  } = req.body;

  // validate delivery option
  if (selectedDeliveryOption !== 'dpd' && selectedDeliveryOption !== 'inpost') {
    res.json('invalid delivery option: '+JSON.stringify(selectedDeliveryOption));
    return;
  }
  if (selectedDeliveryOption === 'inpost' && !selectedParcelLocker) {
    res.json('missing info about parcel locker');
    return;
  }

  await mongooseConnect();
  const productsIds = cartProducts.map(p => p.id);
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({_id:uniqueIds});

  const session = await getServerSession(req,res,authOptions);

  const shippingFeeSetting = await Setting.findOne({name:selectedDeliveryOption+'Fee'});

  let amount = parseFloat(shippingFeeSetting.value);
  cartProducts.forEach(cartProduct => {
    const productInfo = productsInfos.find(productInfo => productInfo._id.toString() === cartProduct.id);
    amount += productInfo.price;
    cartProduct.title = productInfo.title;
  });

  const response = await createTransaction(amount, 'zakup w sklepie', email, name);

  await Order.create({
    cartProducts,name,email,city,postalCode,
    streetAddress,country,paid:false,
    userEmail: session?.user?.email,
    selectedDeliveryOption,
    selectedParcelLocker,
    tpayTransactionId: response.transactionId,
  });

  res.json({
    url: response.transactionPaymentUrl,
  });

}