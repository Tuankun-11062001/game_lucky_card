import { Outlet, Route, Router, Routes } from "react-router-dom";
import Empty from "./components/Empty";
import Success from "./components/Success";
import Setup from "./screen/Setup";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route index element={<Success />} />
          <Route path="setup" element={<Setup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
