import "./App.css";
import Add from "./components/Add";
import Edit from "./components/Edit";
import MainTable from "./components/MainTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainTable />} />
            <Route path="create" element={<Add />} />
            <Route path="update/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
