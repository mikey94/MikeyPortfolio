import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router';
import './utils/fonts/lego.ttf';
import "mapbox-gl/dist/mapbox-gl.css";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

