import { useEffect, useState } from "react";

type Transactions = {
  id: number;
  amount: number;
  address: string;
  type: string;
}[];

export const useTransactions = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions !== null ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleTransactions = (
    amount: number,
    address: string,
    type: string
  ) => {
    setTransactions((prevTransactions: Transactions) => [
      ...prevTransactions,
      {
        id: prevTransactions.length + 1,
        amount,
        address,
        type,
      },
    ]);
  };

  return { transactions, handleTransactions };
};
