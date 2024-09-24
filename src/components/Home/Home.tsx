import { useState } from "react";
import { FloatingActionButton } from "../FloatingActionButton/FloatingActionButton";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { TransactionList } from "../TransactionList/TransactionList";
import { Drawer, Tabs, Tab } from "@mui/material";
import { IoClose } from "react-icons/io5";

export const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onClickDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const onClickDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="mt-11 px-4">
        <TransactionList />
      </div>
      <div>
        <FloatingActionButton handleOpen={onClickDrawerOpen} />
      </div>
      <Drawer className="p-5" open={isDrawerOpen} anchor="bottom">
        <div className="flex justify-between items-center">
          <Tabs value={false}>
            <Tab label="Income" />
            <Tab label="Expenses" />
          </Tabs>
          <IoClose
            className="cursor-pointer"
            size={20}
            onClick={onClickDrawerClose}
          />
        </div>
        <div className="p-5">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <p>Title</p>
              <input
                className="p-2 w-full border-gray-300 rounded-md border border-solid"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Eg: Salary"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Amount</p>
              <input
                className="p-2 w-full border-gray-300 rounded-md border border-solid"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Date</p>
              <input
                className="p-2 w-full border-gray-300 rounded-md border border-solid"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="dd/mm/yyyy"
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-2 w-full rounded-lg bg-fuchsia-400 text-sm font-bold text-center cursor-pointer text-white"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </Drawer>
      <Footer />
    </div>
  );
};
