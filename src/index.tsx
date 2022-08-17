import { ApiProvider } from '@reduxjs/toolkit/query/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { apiSlice } from '@features/api/apiSlice';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
