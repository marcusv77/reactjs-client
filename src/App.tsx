import React from 'react';
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from './styles/theme';
import Header from './components/Header';
import Routes from './routes';
import './App.css';

export default function App() {
  return (
    <div className="app">
        <ThemeProvider theme={theme}>
          <Header />
          <Routes />
        </ThemeProvider>
    </div>
  );
}