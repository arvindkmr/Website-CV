import photo from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <p className= "Heading">Arvind Baloda - Frontend (React ) Developer - SDE-1</p>
   
        <a
          className="App-link"
          href="https://www.linkedin.com/in/arvind-baloda-%F0%9F%98%8A-b4b4421b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Profile
        </a>
       
        <a
          className="App-link"
          href="https://github.com/arvindkmr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github profile
        </a>
      </header>
      <div className="Projects">
      <h1 className='Projects-header'> Projects</h1>

      </div>
    </div>
  );
}

export default App;
