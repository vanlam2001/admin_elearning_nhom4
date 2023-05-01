
import AdminLayout from "./Layout/AdminLayout";
import { adminRoute } from "./routes/adminRoute";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {adminRoute.map(({ url, component }) => {
            return <Route path={url} element={component}></Route>
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
