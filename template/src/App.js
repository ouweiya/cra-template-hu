import React, { createElement as e } from 'react';
import Routes from './routes/Routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'src/theme/theme';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import 'typeface-roboto';

const App = e(Provider, { store }, e(ThemeProvider, { theme }, e(CssBaseline, null, e(Router, null, e(Routes)))));

export default App;

