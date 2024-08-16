import { useEffect, useState } from "react";
import { useBalance } from "./useBalance";

export const useIncome = () => {
  const { subtractBalance } = useBalance();

  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem("income");
    return savedIncome != null ? JSON.parse(savedIncome) : 0;
  });

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  const addIncome = (amount: number) => {
    subtractBalance(amount);
    setIncome(amount);
  };

  const subtractIncome = (amount: number) => {
    setIncome((prevIncome: number) => prevIncome - amount);
  };

  return { income, addIncome, subtractIncome };
};
