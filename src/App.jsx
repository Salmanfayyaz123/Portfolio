import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </>
  );
}

export default App;
