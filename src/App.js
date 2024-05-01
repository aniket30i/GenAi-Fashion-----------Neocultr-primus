import "./App.css";
import Main from "./Components/Main";
import Create from "./Components/Create";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
