import "./App.css";
import { Footer, Header, TransactionList } from "./components";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <div className="credit-card-container">
        <CreditCard />
      </div> */}
      {/* <div className="money-management-container">
        <MoneyManagement />
      </div> */}
      <div className="mt-11 px-4">
        <TransactionList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
