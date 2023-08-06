import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
          )

