import logo from "./logo.svg";
import "./App.css";
import { Home } from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
