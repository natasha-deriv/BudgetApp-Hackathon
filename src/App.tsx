import "./App.css";
import { CreditCard } from "./components";

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="currentBalance">Current Balance</div>
        <div className="balance">$10,000,000,000.00</div>
      </div>
      <div className="credit-card-container">
        <CreditCard />
      </div>
    </div>
  );
};

export default App;
