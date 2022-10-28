import React from "react";
import CartList from "../Components/CartList/CartList";
import Layout from "./../Components/Layout/Layout";
import "./checkout.scss";
import { Context } from "./../Components/Context/Context";
export default function Checkout() {

  const { cartData, cartCalculation } = React.useContext(Context); // Call context object

  return (
    <Layout>
      <div className="checkout-main">
        <div className="cm-content">
          <div className="cm-left">
            <h5 className="mb-4">Your details</h5>
            <form>
              <div class="form-row">
                <div class="form-group mb-3 col-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    // type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-6 mb-3 ">
                  <label for="inputPassword4">Phone</label>
                  <input
                    type="telephone"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div class="form-group mb-3 ">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group mb-3 ">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6 mb-3 ">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4 mb-3 ">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2 mb-3 ">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
            </form>
          </div>
          <div className="cm-right">
            <h5>Your cart</h5>
            <CartList />
          </div>
        </div>
        <div className="checkout-bar">
          <div className="checkout-details">
            <div className="price-details">
              <p>Total</p>
              <div>
                <s>₹{cartCalculation.totalAmount}</s>
                <h5>₹{cartCalculation.totalAmountWithDiscount}</h5>
              </div>
            </div>

            <button disabled={!cartData.length} className="checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
