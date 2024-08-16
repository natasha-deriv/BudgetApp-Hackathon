import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { TransactionList } from "../TransactionList/TransactionList";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-11 px-4">
        <TransactionList />
      </div>
      <Footer />
    </div>
  );
};
