import { useTransactions } from "../../hooks";
import "./TransactionList.scss";

type Transactions = {
  id: number;
  amount: number;
  address: string;
  type: string;
};

export const TransactionList = () => {
  const { transactions } = useTransactions();

  return (
    <div className="transaction-list">
      <div>TransactionList</div>
      <div className="transaction-parent">
        {transactions.map((transactions: Transactions) => (
          <div className="transaction-item" key={transactions.id}>
            <div>{transactions.address}</div>
            <div>{transactions.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
