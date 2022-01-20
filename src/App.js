import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from "./Components/Pages/Home";
import './App.css';

function App() {
  return (
  
    <main className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
    </main>
  
  );
}

export default App;
