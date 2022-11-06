import { getShoppingCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
  //get products data
  const productsData = await fetch("http://localhost:5000/products");
  const { products } = await productsData.json();

  //get cart
  const savedCart = getShoppingCart();
  const initialCart = [];

  for (const id in savedCart) {
    const addedProducts = products.find((product) => product._id === id);
    if (addedProducts) {
      const quantity = savedCart[id];
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
    }
  }
  return { products: products, initialCart: initialCart };
};
