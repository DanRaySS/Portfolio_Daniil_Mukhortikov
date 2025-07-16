import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainPage } from '../pages/MainPage/MainPage';
import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
