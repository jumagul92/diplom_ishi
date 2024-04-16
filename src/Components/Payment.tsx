function Payment() {
  return (
    <div className="container">
      <div className="payment">
        <h2 className="payment__title">Payment</h2>
        <p className="payment__text">Place information on this page describing the payment methods your online store uses.</p>
        <p className="payment__text">
          <strong>
            <em>For example:</em>
          </strong>
        </p>
        <p className="payment__text"> You can pay for your order:</p>
        <ul className="payment__list">
          <li> 1. Cash to the courier or at the point of delivery upon receipt of the order</li>
          <li>2. By Visa, Mastercard or MIR bank card through the website when placing an order</li>
          <li>3. Cash on delivery when ordering with delivery by Post</li>
        </ul>
      </div>
    </div>
  );
}

export default Payment;
