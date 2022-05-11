import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route path='*' element={
        <main style={{ padding: '1rem' }}>
          <p>There's nothing here!</p>
        </main>
      }/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();