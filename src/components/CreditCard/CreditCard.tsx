import "./CreditCard.scss";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { RiVisaLine } from "react-icons/ri";

export const CreditCard = () => {
  return (
    <div className="creditCard">
      <div className="card-title">
        <div className="deriv-bank">derivBank</div>
        <div className="paywave-icon">
          <PiContactlessPaymentThin size={30} color="white" />
        </div>
      </div>
      <div className="card-number">2389 4729 4348 1254</div>
      <div className="card-details">
        <div className="card-holder-title">
          <div className="card-holder">Card Holder</div>
          <div className="card-name">Mike Ross</div>
        </div>
        <div className="expiry-date-title">
          <div className="expiry-date">Expiry Date</div>
          <div className="date">08/28</div>
        </div>
        <div className="visa-icon">
          <RiVisaLine size={50} color="white" />
        </div>
      </div>
    </div>
  );
};
