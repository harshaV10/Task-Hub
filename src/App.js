import { Home } from "./pages/Home";
import "./App.css";
import { Topbar } from "./components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddTask } from "./pages/AddTask";
import { SingleTask } from "./pages/SingleTask";



function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-task" element={<AddTask />} />
        <Route path="/:title" element={<SingleTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
