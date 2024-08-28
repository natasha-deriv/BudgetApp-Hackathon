import { useTransactions } from "../../hooks";

type Transactions = {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: string;
};

export const TransactionList = () => {
  const { transactions } = useTransactions();

  return (
    <div className="bg-white p-3 rounded-lg shadow-[rgba(2,0,15,0.5)_0px_0px_8px_0px]">
      <div className="text-xl pb-5">Transaction List</div>
      <div className="flex justify-between gap-3 flex-col">
        {transactions
          // .filter(
          //   (transactions: Transactions) => transactions.type === "receive"
          // )
          .map((transactions: Transactions) => (
            <div
              className="flex justify-between items-center"
              key={transactions.id}
            >
              <div className="w-1/4">{transactions.date}</div>
              <div className="w-1/2 text-left">{transactions.title}</div>
              <div
                className={`w-1/4 text-right font-semibold ${
                  transactions.type === "receive"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transactions.type === "receive"
                  ? `+${transactions.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`
                  : `-${transactions.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
              </div>
              {/* <div>{transactions.type}</div> */}
            </div>
          ))}
      </div>
    </div>
  );
};
