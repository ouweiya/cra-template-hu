import React from 'react';
import Routes from './routes/Routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'src/theme/theme';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import 'typeface-roboto';
import 'react-perfect-scrollbar/dist/css/styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Routes />
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
