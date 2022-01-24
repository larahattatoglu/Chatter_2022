import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className = "header">
        <img className = "logo"/>
        <span className= "title"> Chatter!</span>
      </header>
      
      <footer className = "footer">
        <input className = "textinput" />
        <button className = "send" > Send </button>

      </footer>

    </div>
  );
}

export default App;
