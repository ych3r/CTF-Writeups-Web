import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import WriteUps from './writeups';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<WriteUps />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
