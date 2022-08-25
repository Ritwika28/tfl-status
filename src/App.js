import TubeList from './components/TubeList';
import './App.css';

function App() {
  return (
    <div className="app">
       <div className="app-title" aria-roledescription='header'>
          <h1>
          <a href="/">Transport for London</a>
          </h1>
       </div>
      <TubeList ria-roledescription='content'/>
    </div>
  );
}

export default App;
