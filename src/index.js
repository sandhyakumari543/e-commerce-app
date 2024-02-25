// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';



// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//       <App />
  
// );


// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
