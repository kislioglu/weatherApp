import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components';
import "./assets/tailwind.css"
import { DataProvider } from './context/datacontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="bg-black text-white w-screen h-screen"> 
    <DataProvider>
        <MainPage />
    </DataProvider>
    </div>
   
);
