// import './App.css';
import { Component } from 'react';
import AppStyle from './components/style/AppStyle';
import AppHeader from './components/style/AppHeader';
import GlobalStyle from './components/style/GlobalStyles';



class App extends Component{

  render() {
    return (
      <>
        <GlobalStyle />
        <AppStyle>
          <AppHeader>Ola</AppHeader>
        </AppStyle>
      </>
    );
  }
}

export default App;
