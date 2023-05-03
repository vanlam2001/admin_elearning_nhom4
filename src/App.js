import { adminRoute } from "./routes/adminRoute";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Spinner from "./Components/Spinner";


function App() {
  return (
    <div>
      <Spinner></Spinner>
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
