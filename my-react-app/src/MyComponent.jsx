import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [shippingMethod, setShippingMethod] = useState("Delivery");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentsChange(event) {
    setComments(event.target.value);
  }

  function handlePaymentMethodChange(event) {
    setPaymentMethod(event.target.value);
  }

  function handleShippingMethodChange(event) {
    setShippingMethod(event.target.value);
  }

  return (
    <>
      <div>
        <div>
          <input type="text" value={name} onChange={handleChange} />
          <p>Name: {name}</p>
        </div>
        <div>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div>
        <textarea
          placeholder="Enter delivery comments"
          value={comments}
          onChange={handleCommentsChange}
        ></textarea>
        <p>Comments: {comments}</p>
      </div>

      <div>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Gift Card">Gift Card</option>
          <option value="Voucher">Voucher</option>
        </select>
        <p>Payment Method: {paymentMethod}</p>
      </div>

      <div>
        <label>
          Delivery:
          <input
            type="radio"
            value="Delivery"
            checked={shippingMethod === "Delivery"}
            onChange={handleShippingMethodChange}
          />
        </label>
        <br />
        <label>
          Pick Up:
          <input
            type="radio"
            value="Pick Up"
            checked={shippingMethod === "Pick Up"}
            onChange={handleShippingMethodChange}
          />
        </label>
        <p>Shipping Method: {shippingMethod}</p>
      </div>
    </>
  );
}

export default MyComponent;
