import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Set initial theme class before React mounts to avoid flash
try {
  const stored = localStorage.getItem('theme');
  const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
  document.documentElement.classList.toggle('dark', theme === 'dark');
} catch (e) {
  // ignore
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
