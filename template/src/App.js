import React from 'react';
import Routes from './routes/Routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from 'src/theme/MuiThemeProvider';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import 'typeface-roboto';
import 'react-perfect-scrollbar/dist/css/styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <CssBaseline>
          <Router>
            <Routes />
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
