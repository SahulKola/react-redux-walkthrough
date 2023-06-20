import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {combineReducers, legacy_createStore} from 'redux'
import counterReducer from './Reducers/counterReducer.js'

const allReducers = combineReducers({counter: counterReducer})
const myStore = legacy_createStore(allReducers);

myStore.subscribe(()=> console.log(myStore.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
