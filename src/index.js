import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './App';
import { BrowserRouter } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import productsReducer from './views/products/ProductsState'
const reducer = combineReducers({

productssStore: productsReducer, 
})

const store = configureStore({reducer,
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Provider store={store}>
    <Root/>
      </Provider>
</React.StrictMode>
);
