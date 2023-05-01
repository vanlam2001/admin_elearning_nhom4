import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminRoute } from './routes/adminRoute';


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
