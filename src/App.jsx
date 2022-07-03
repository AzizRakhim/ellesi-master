import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
