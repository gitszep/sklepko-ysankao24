import axios from "axios";

let token = null;

async function prepare() {
  if (!token) {
    token = await getBearer();
  }
}

async function getConfig() {
  await prepare();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function tpayPost(endpoint, data, autoConfig=true) {
  try {
    return await axios.post('https://api.tpay.com'+endpoint, data, autoConfig ? await getConfig() : null);
  } catch (e) {
    if (e.response.data?.errors) {
      console.error(e.response.data?.errors);
      throw 'tpayPost error';
    } else {
      throw e.response;
    }
  }
}

async function tpayGet(endpoint) {
  return await axios.get('https://api.tpay.com'+endpoint, await getConfig());
}

async function getBearer() {
  const response = await tpayPost('/oauth/auth', {
    "client_id": process.env.TPAY_CLIENT,
    "client_secret": process.env.TPAY_SECRET,
    "scope": "read write"
  }, false);
  return response.data?.access_token;
}

export async function createTransaction(amount, description, payerEmail, payerName) {
  const response = await tpayPost('/transactions', {
    amount,
    description,
    payer: { email: payerEmail, name: payerName },
    callbacks: {
      payerUrls: {
        success: process.env.PUBLIC_URL + '/cart?success=1',
        error: process.env.PUBLIC_URL + '/cart?canceled=1',
      },
    },
  });
  return response.data;
}