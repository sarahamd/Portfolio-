
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Notfound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}  ></Route>
        <Route path="*" element={<Notfound/>}  ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
