import { useEffect, useState } from "react";

type Transactions = {
  id: number;
  title: string;
  amount: number;
  date: string;
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
    title: string,
    amount: number,
    date: string,
    type: string
  ) => {
    setTransactions((prevTransactions: Transactions) => [
      ...prevTransactions,
      {
        id: prevTransactions.length + 1,
        title,
        amount,
        date,
        type,
      },
    ]);
  };

  return { transactions, handleTransactions };
};
