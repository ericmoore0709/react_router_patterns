

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Color from './Color';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';

function App() {

  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    const { name, value } = color;
    console.log(color);
    setColors([{ name, value }, ...colors]);
  }

  return (
    <div className="App">
      <h1>Welcome to the color factory.</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ColorList colors={colors} />} />
          <Route path='/new' element={<NewColorForm addColor={addColor} />} />
          <Route path='/color/:name' element={<Color colors={colors} />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
