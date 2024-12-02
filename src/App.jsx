import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./Layout";
import { Home } from "./Components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
