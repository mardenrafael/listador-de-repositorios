import { Component } from 'react';
import Header from './components/Header';
import Display from './components/Display';
import GlobalStyle from './components/styles/GlobalStyles';



class App extends Component{

  render() {
    return (
      <>
      <GlobalStyle />
      <Header />
      <Display />
      </>
    );
  }
}

export default App;
