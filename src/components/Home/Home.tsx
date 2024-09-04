import { useState } from "react";
import { FloatingActionButton } from "../FloatingActionButton/FloatingActionButton";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { TransactionList } from "../TransactionList/TransactionList";
import { Drawer } from "@mui/material";

export const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onClickDrawerOpen = () => {
    setIsDrawerOpen(true);
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
      <Drawer open={isDrawerOpen} anchor="bottom">
        hello
      </Drawer>
      <Footer />
    </div>
  );
};
