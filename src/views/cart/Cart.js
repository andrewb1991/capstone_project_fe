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
  if (isEmpty) return <h6 className="text-center">Il carrello è vuoto</h6>;
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h4>Carrello:</h4>
            <h6>
            <i class="fa-solid fa-cart-shopping fa-xl"></i>             Prodotti: {totalItems}, Totale: {totalUniqueItems} 
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
                        <td>{parseFloat(items.price)}</td>
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
          <div className="col-auto ms-auto">
            <h4>Totale: {cartTotal} </h4>
            

          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
