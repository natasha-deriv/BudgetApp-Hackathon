import { useTransactions } from "../../hooks";

type Transactions = {
  id: number;
  amount: number;
  address: string;
  type: string;
};

export const TransactionList = () => {
  const { transactions } = useTransactions();

  return (
    <div className=" bg-white p-3 rounded-lg shadow-[rgba(2,0,15,0.5)_0px_0px_8px_0px]">
      <div className="text-xl pb-5">TransactionList</div>
      <div className="flex justify-between gap-3 flex-col">
        {transactions.map((transactions: Transactions) => (
          <div className="flex justify-between" key={transactions.id}>
            <div>{transactions.address}</div>
            <div>{transactions.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
