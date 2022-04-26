import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header greeting="Welcome to the Farm!"/>
      <Main/>
      <Footer email="ktroney@gmail.com"/>
    </div>
  );
}

export default App;
