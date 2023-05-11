import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  RouterProvider, createHashRouter
} from 'react-router-dom';

import './index.scss';
import Root from './App';
import ErrorPage from './pages/Error/Error';
import reportWebVitals from './reportWebVitals';


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
