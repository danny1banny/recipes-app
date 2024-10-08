import ReactDOM from 'react-dom/client';
import App from './app/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import '../src/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
