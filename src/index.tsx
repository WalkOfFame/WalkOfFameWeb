import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import './i18n';
import React from 'react';

declare global
{
  interface Window
  {
    AppConfig: { [key: string]: any };
  }
}

window.AppConfig = window.AppConfig || {};

createRoot(document.getElementById('root')).render(
  <React.Suspense>
    <App />
  </React.Suspense>
);