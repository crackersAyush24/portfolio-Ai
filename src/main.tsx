import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter } from 'react-router-dom';  // <-- Import HashRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>  {/* <-- Wrap your App with HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);
