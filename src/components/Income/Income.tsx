import { useIncome } from "../../hooks/useIncome";

export const Income = () => {
  const { income } = useIncome();
  return <div>Your Income</div>;
};
