import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ThemeProvider, createMuiTheme, darken } from '@material-ui/core/styles';

const MuiThemeProvider = ({ children, ...other }) => {
  const themeData = useSelector(store => store.theme, shallowEqual);

  const theme = useMemo(() => {
    return createMuiTheme(themeData, 'zhCN');
  }, [themeData]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
