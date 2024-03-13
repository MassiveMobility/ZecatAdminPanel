import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { allRoutes } from "./routes/routes";
import Login from "./pages/login/Login";
import "./App.css";

function App() {
  let token = true;
  const location = useLocation();
  const newPath = location.pathname;

  return (
    <div className="App">
      <Routes>
        {token === true ? (
          allRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                newPath === item.path ? (
                  <Layout>{item.element}</Layout>
                ) : (
                  item.element
                )
              }
            />
          ))
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Not found</div>} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
