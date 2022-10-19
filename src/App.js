import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./Pages/Homepage";
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
