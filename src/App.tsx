import "./App.css";
import { CreditCard, MoneyManagement } from "./components";
import { useBalance } from "./hooks";

const App = () => {
  const { balance } = useBalance();

  return (
    <div className="main-container">
      <div className="container">
        <div className="currentBalance">Current Balance</div>
        <div className="balance">${balance.toFixed(2)}</div>
      </div>
      <div className="credit-card-container">
        <CreditCard />
      </div>
      <div className="money-management-container">
        <MoneyManagement />
      </div>
    </div>
  );
};

export default App;
