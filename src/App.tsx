import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Expenses } from "./components/Expenses/Expenses";
import { Settings } from "./components/Settings/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
