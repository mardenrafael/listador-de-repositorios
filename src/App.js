import { Component } from 'react';
import Header from './components/Header';
import GlobalStyle from './components/styles/GlobalStyles';


class App extends Component{

  render() {
    return (
      <>
      <GlobalStyle />
      <Header />
      </>
    );
  }
}

export default App;
