import { useState, useEffect } from "react";

export const useBalance = () => {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance !== null ? JSON.parse(savedBalance) : 10000000000;
  });

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  const addBalance = (amount: number) => {
    setBalance((prevBalance: number) => prevBalance + amount);
  };

  const subtractBalance = (amount: number) => {
    setBalance((prevBalance: number) => prevBalance - amount);
  };

  return { balance, addBalance, subtractBalance };
};
