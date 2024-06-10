import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts,setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);

  function addProduct(productId, selectedProps) {
    setCartProducts(prev => [...prev, {id:productId, props:selectedProps}]);
  }

  function removeProduct(productIdToRemove, productSelectedProps, onlyOne=false) {
    const match = p => JSON.stringify(p) === JSON.stringify({id:productIdToRemove,props:productSelectedProps});
    if (onlyOne) {
      setCartProducts(prev => {
        const firstMatchingIndex = prev.findIndex(p => match(p));
        return prev.filter((v,index) => index !== firstMatchingIndex);
      })
    } else {
      setCartProducts(prev => prev.filter(p => !match(p)));
    }
  }

  function clearCart() {
    ls?.setItem('cart', JSON.stringify([]));
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}