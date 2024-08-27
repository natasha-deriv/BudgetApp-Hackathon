import { Modal } from "@deriv-com/ui";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useBalance, useTransactions } from "../../hooks";
/**
 * @todo Add onClose function prop. Type would be Voidfunction
 */
type ReceiveModalProps = {
  isReceiveOpen: boolean;
  handleClose: VoidFunction;
};

/**
 * @todo Add close icon from quill icons and close the modal
 */
export const ReceiveMoneyModal = ({
  isReceiveOpen,
  handleClose,
}: ReceiveModalProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const { subtractBalance } = useBalance();

  const { handleTransactions } = useTransactions();

  const handleSubmit = () => {
    subtractBalance(Number(amount));
    handleTransactions(title, Number(amount), date, "expenses");
  };

  return (
    <Modal
      className="w-[400px] h-auto text-black rounded-lg p-2"
      isOpen={isReceiveOpen}
      ariaHideApp={false}
    >
      <div className="flex justify-between items-center">
        <div>Expenses</div>
        <IoClose className="cursor-pointer" size={20} onClick={handleClose} />
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <p>Title</p>
          <input
            className="p-2 w-full border-gray-300 rounded-md border border-solid"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <p>Amount</p>
          <input
            className="p-2 w-full border-gray-300 rounded-md border border-solid"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <div>
          <p>Date</p>
          <input
            className="p-2 w-full border-gray-300 rounded-md border border-solid"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="date"
            name="date"
          ></input>
        </div>
        <div className="flex flex-col items-center gap-3">
          <button
            type="submit"
            className="p-2 w-full rounded-lg bg-red-600 text-sm font-bold text-center cursor-pointer text-white"
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};
