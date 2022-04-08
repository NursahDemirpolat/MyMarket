import './App.css';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default App;