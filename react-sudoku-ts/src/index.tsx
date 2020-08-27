import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { unregister, configureStore } from 'core';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, Theme } from 'styles';
import { Card, Content, Grid, Title } from 'components';

const store = configureStore();

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content className="content">
          <Title className="title">Sudoku</Title>
          <Card className="card">
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

unregister();
