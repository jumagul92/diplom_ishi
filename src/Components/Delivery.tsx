function Delivery() {
  return (
    <div className="container">
      <div className="delivery">
        <h2 className="delivery__title">Delivery</h2>
        <p className="delivery__text">Place information on this page describing the shipping methods your online store uses.</p>
        <p className="delivery__text">
          <strong>
            <em>For example:</em>
          </strong>
        </p>
        <p className="delivery__text">Our online store delivers throughout Tashkent and the regions of Uzbekistan:</p>
        <ul className="delivery__list">
          <li className="delivery__text">1. Courier delivery in Tashkent - 35 000 som.</li>
          <li className="delivery__text">2. Pickup from our pick-up point or retail store is free!</li>
          <li className="delivery__text">3. Postal delivery throughout Uzbekistan - from 15 000 som depending on the delivery address.</li>
        </ul>
        <p className="delivery__text">Delivery terms:</p>
        <ul className="delivery__list">
          <li className="delivery__text">Courier delivery in Tashkent - in 24 hours</li>
          <li className="delivery__text">Pickup - in 3 days</li>
          <li className="delivery__text">Postal delivery throughout Uzbekistan – from 3 to 14 days depending on the region</li>
        </ul>
        <p className="delivery__text">
          <strong>Delivery is free for order amounts over 150 000 som.</strong>
        </p>
        <p className="delivery__text">----</p>
      </div>
    </div>
  );
}

export default Delivery;
