import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './styles/index.css'
import App from './App.jsx'


const htmlRoot = document.getElementById('root');
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode >
)
