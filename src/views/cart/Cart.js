import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log(cartTotal)
  if (isEmpty) return <h1 className="text-center text-primary">Il carrello è vuoto</h1>;
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h3>
            <strong>Carrello  <i class="fa-solid fa-cart-shopping fa-xl"></i></strong>
            </h3>
            <h6>
           Prodotti: {totalItems}, Totale: {totalUniqueItems} 
            </h6>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items &&
                  items.map((items, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={items.thumbnail}
                            style={{ height: "3rem" }}
                          />
                        </td>
                        <td>{items.product}</td>
                        <td>{items.price}</td>
                        <td>Quantità: {items.quantity}</td>
                        <td>
                          <button className="btn btn-info ms-2" 
                          onClick={()=> updateItemQuantity(items.id, items.quantity -1)}>-</button>
                          <button className="btn btn-info ms-2"
                           onClick={()=> updateItemQuantity(items.id, items.quantity +1)}
                          >+</button>
                          <button className="btn btn-danger ms-2"
                           onClick={()=> removeItem(items.id)}>Rimuovi</button>

                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2"
            onClick={()=>{emptyCart()}}
            >Svuota Carrello</button>
            <button className="btn btn-primary m-2">Compra Ora</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
