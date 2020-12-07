import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './Components/App/App';
import allReducers from './Redux/Reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

const store = createStore(
    allReducers, 
    composeWithDevTools()
  );

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
