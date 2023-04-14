import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import CtfWriteUps from './ctf-writeups';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<CtfWriteUps />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
