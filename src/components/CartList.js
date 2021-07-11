import CartItem from "./CartItem";

const CartList = ({ cartItems, handleAddItemToCart, handleRemoveItemFromCart  }) => {
  const calculeTotal = cartItems.reduce(
    (sum, i) => sum + i.amount * i.price,
    0
  );
  return(
    <aside>
      <h1>Carrito de compras</h1>
      {cartItems.length === 0
        ? <h3>No hay productos agregados al carrito todavía</h3>
        : null}
      <div>
        {cartItems.map((i) => (
          <CartItem 
            item={i}
            handleAddItemToCart={handleAddItemToCart} 
            handleRemoveItemFromCart={handleRemoveItemFromCart} 
          ></CartItem>
        ))}
      </div>
      <h2>Total: {calculeTotal.toFixed(2)}</h2>
    </aside>
  )
}

export default CartList;
