import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { ProductInputs, userInputs } from "./formSource";
import "./Pages/style/dark.scss"
import {useContext, useState} from "react"
import {DarkModeContext} from "../src/context/darkModeContext"

function App() {
  const { darkMode } = useContext(DarkModeContext);
  // const { darkMode } = useContext(darkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New user"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={ProductInputs} title="Add New Product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
