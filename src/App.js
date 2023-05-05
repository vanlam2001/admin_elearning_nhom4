import { adminRoute } from "./routes/adminRoute";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Spinner from "./toolkit/Spinner";

function App() {
  return (
    <div>
      <Spinner></Spinner>
      <BrowserRouter>
        <Routes>
          {adminRoute.map(({ url, component }, index) => {
            return <Route key={index} path={url} element={component}></Route>
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
