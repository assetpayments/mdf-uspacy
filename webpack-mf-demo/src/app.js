import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Form';

const root = createRoot(document.getElementById('app'));

const App = () => {
    return (
        <div>
            <h1>Webpack Module Federation Demo</h1>
            <Form />
        </div>
    );
};

root.render(<App />);
