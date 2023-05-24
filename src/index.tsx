import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from 'components/App';

declare global
{
  interface Window
  {
    AppConfig: { [key: string]: any };
  }
}

window.AppConfig = window.AppConfig || {};

createRoot(document.getElementById('root')).render(<App />);